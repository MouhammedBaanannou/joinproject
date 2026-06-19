import { NextRequest } from "next/server";
import { prismaSensor } from "@/lib/prisma-sensor";
import { minioClient, MINIO_BUCKET } from "@/lib/minio";

/**
 * POST /api/audio/presign-upload
 *
 * Request JSON Body:
 *   filename     — the original name of the file (required, string)
 *   fileSize     — size of the file in bytes (required, integer)
 *   contentType  — MIME type of the file (optional, string)
 *   duration     — duration in seconds (optional, integer)
 *   bucket       — override default bucket (optional, string)
 *
 * Auth: Bearer token via X-API-Key header OR Authorization: Bearer <token>
 *
 * Returns: { success: true, uploadUrl: string, record: G7E_AudioFile }
 */

function checkAuth(request: NextRequest): boolean {
  const apiKey = process.env.ROVER_API_KEY;
  if (!apiKey) return true; // open (dev only)

  const fromHeader =
    request.headers.get("x-api-key") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  return fromHeader === apiKey;
}

export async function POST(request: NextRequest) {
  // ── Auth ──────────────────────────────────────────────────────────────────
  if (!checkAuth(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ── Parse JSON body ───────────────────────────────────────────────────────
  let body: any;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { filename, fileSize, contentType, duration, bucket = MINIO_BUCKET } = body;

  if (!filename || typeof filename !== "string") {
    return Response.json({ error: "Missing or invalid parameter 'filename'" }, { status: 400 });
  }

  if (fileSize === undefined || typeof fileSize !== "number") {
    return Response.json({ error: "Missing or invalid parameter 'fileSize'" }, { status: 400 });
  }

  // ── Derive storage path ───────────────────────────────────────────────────
  const timestamp  = new Date();
  const datePath   = timestamp.toISOString().slice(0, 10).replace(/-/g, "/"); // 2026/06/17
  const safeName   = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  const objectPath = `${datePath}/${Date.now()}_${safeName}`;

  // ── Generate Presigned PUT URL ────────────────────────────────────────────
  let uploadUrl: string;
  try {
    // Generate a presigned PUT URL that expires in 1 hour (3600 seconds)
    uploadUrl = await minioClient.presignedPutObject(bucket, objectPath, 3600);
  } catch (err) {
    console.error("[audio/presign-upload] MinIO signing error:", err);
    return Response.json(
      { error: "Failed to generate presigned upload URL", detail: String(err) },
      { status: 502 }
    );
  }

  // ── Save metadata to DB ───────────────────────────────────────────────────
  let record;
  try {
    record = await prismaSensor.g7E_AudioFile.create({
      data: {
        filename,
        minioBucket: bucket,
        minioPath:   objectPath,
        fileSize,
        duration:    isNaN(duration!) ? null : duration,
        uploadedAt:  timestamp,
      },
    });
  } catch (err) {
    console.error("[audio/presign-upload] DB error:", err);
    return Response.json(
      { error: "Presigned URL generated but failed to save metadata to DB", detail: String(err) },
      { status: 500 }
    );
  }

  return Response.json({
    success: true,
    uploadUrl,
    record,
  }, { status: 200 });
}

/**
 * GET /api/audio/presign-upload
 * Health-check / info endpoint.
 */
export async function GET() {
  return Response.json({
    status: "ok",
    endpoint: "POST /api/audio/presign-upload",
    fields: {
      filename: "string (required)",
      fileSize: "number (required, bytes)",
      contentType: "string (optional)",
      duration: "number (optional, seconds)",
      bucket: "string (optional)"
    },
    auth: process.env.ROVER_API_KEY ? "X-API-Key header required" : "open (no key set)",
  });
}

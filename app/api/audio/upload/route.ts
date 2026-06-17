import { NextRequest } from "next/server";
import { prismaSensor } from "@/lib/prisma-sensor";
import { minioClient, ensureBucket, MINIO_BUCKET } from "@/lib/minio";
import { Readable } from "stream";

/**
 * POST /api/audio/upload
 *
 * Accepts multipart/form-data with:
 *   file      — the audio file (required)
 *   duration  — duration in seconds (optional, integer)
 *   bucket    — override the default MinIO bucket (optional)
 *
 * Auth: Bearer token via X-API-Key header OR Authorization: Bearer <token>
 * Set ROVER_API_KEY in .env.local to protect the endpoint.
 *
 * Returns: { success: true, record: G7E_AudioFile }
 */

function checkAuth(request: NextRequest): boolean {
  const apiKey = process.env.ROVER_API_KEY;
  if (!apiKey) return true; // no key configured → open (dev only)

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

  // ── Parse multipart form ──────────────────────────────────────────────────
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Invalid multipart body" }, { status: 400 });
  }

  const fileEntry = formData.get("file");
  if (!fileEntry || typeof fileEntry === "string") {
    return Response.json({ error: "Missing audio file in form field 'file'" }, { status: 400 });
  }

  const file     = fileEntry as File;
  const bucket   = (formData.get("bucket")   as string | null) ?? MINIO_BUCKET;
  const duration = formData.get("duration")
    ? parseInt(formData.get("duration") as string, 10)
    : null;

  // ── Derive storage path ───────────────────────────────────────────────────
  const timestamp  = new Date();
  const datePath   = timestamp.toISOString().slice(0, 10).replace(/-/g, "/"); // 2026/06/17
  const safeName   = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const objectPath = `${datePath}/${Date.now()}_${safeName}`;

  // ── Upload to MinIO ───────────────────────────────────────────────────────
  try {
    await ensureBucket(bucket);

    const arrayBuffer = await file.arrayBuffer();
    const buffer      = Buffer.from(arrayBuffer);
    const stream      = Readable.from(buffer);

    await minioClient.putObject(
      bucket,
      objectPath,
      stream,
      buffer.byteLength,
      { "Content-Type": file.type || "audio/wav" }
    );
  } catch (err) {
    console.error("[audio/upload] MinIO error:", err);
    return Response.json(
      { error: "Failed to upload file to storage", detail: String(err) },
      { status: 502 }
    );
  }

  // ── Save metadata to DB ───────────────────────────────────────────────────
  let record;
  try {
    record = await prismaSensor.g7E_AudioFile.create({
      data: {
        filename:    file.name,
        minioBucket: bucket,
        minioPath:   objectPath,
        fileSize:    file.size,
        duration:    isNaN(duration!) ? null : duration,
        uploadedAt:  timestamp,
      },
    });
  } catch (err) {
    console.error("[audio/upload] DB error:", err);
    return Response.json(
      { error: "File uploaded but failed to save metadata to DB", detail: String(err) },
      { status: 500 }
    );
  }

  return Response.json({ success: true, record }, { status: 201 });
}

/**
 * GET /api/audio/upload
 * Health-check / info endpoint so the rover can verify connectivity.
 */
export async function GET() {
  return Response.json({
    status: "ok",
    endpoint: "POST /api/audio/upload",
    fields: ["file (required)", "duration (optional, seconds)", "bucket (optional)"],
    auth: process.env.ROVER_API_KEY ? "X-API-Key header required" : "open (no key set)",
  });
}

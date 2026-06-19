import { NextRequest } from "next/server";
import { minioClient } from "@/lib/minio";

/**
 * GET /api/audio/stream?bucket=rover-audio&path=2026/06/18/123_file.wav
 *
 * Streams an audio file from MinIO. Public — no auth required.
 */
export async function GET(request: NextRequest) {

  const bucket = request.nextUrl.searchParams.get("bucket");
  const path = request.nextUrl.searchParams.get("path");

  if (!bucket || !path) {
    return Response.json(
      { error: "Missing 'bucket' and 'path' query params" },
      { status: 400 }
    );
  }

  try {
    // Get object info for Content-Length
    const stat = await minioClient.statObject(bucket, path);

    // Stream the object
    const stream = await minioClient.getObject(bucket, path);

    // Collect chunks into a buffer (Next.js Response needs a body, not a Node stream)
    const chunks: Buffer[] = [];
    for await (const chunk of stream) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    const buffer = Buffer.concat(chunks);

    // Guess content type from filename
    const ext = path.split(".").pop()?.toLowerCase() ?? "";
    const contentType =
      { wav: "audio/wav", mp3: "audio/mpeg", ogg: "audio/ogg", flac: "audio/flac", m4a: "audio/mp4", webm: "audio/webm" }[ext] ??
      stat.metaData?.["content-type"] ??
      "application/octet-stream";

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(stat.size),
        "Accept-Ranges": "bytes",
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (err: any) {
    if (err?.code === "NoSuchKey" || err?.code === "NotFound") {
      return Response.json({ error: "File not found in storage" }, { status: 404 });
    }
    console.error("[audio/stream] MinIO error:", err);
    return Response.json(
      { error: "Failed to stream file", detail: String(err) },
      { status: 502 }
    );
  }
}

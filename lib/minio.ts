import * as Minio from "minio";

const endpoint  = process.env.MINIO_ENDPOINT  ?? "localhost";
const port      = parseInt(process.env.MINIO_PORT ?? "9000");
const accessKey = process.env.MINIO_ACCESS_KEY ?? "";
const secretKey = process.env.MINIO_SECRET_KEY ?? "";
const useSSL    = process.env.MINIO_USE_SSL === "true";

// Global singleton — reuse across hot-reloads in dev
const globalForMinio = global as typeof globalThis & { _minioClient?: Minio.Client };

export const minioClient: Minio.Client =
  globalForMinio._minioClient ??
  new Minio.Client({ endPoint: endpoint, port, useSSL, accessKey, secretKey });

if (process.env.NODE_ENV !== "production") {
  globalForMinio._minioClient = minioClient;
}

export const MINIO_BUCKET = process.env.MINIO_BUCKET ?? "rover-audio";

/** Ensure the bucket exists, create it if not */
export async function ensureBucket(bucket = MINIO_BUCKET) {
  const exists = await minioClient.bucketExists(bucket);
  if (!exists) {
    await minioClient.makeBucket(bucket, "us-east-1");
  }
}

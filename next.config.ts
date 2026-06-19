import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.56.1"],
  outputFileTracingIncludes: {
    "/api/**": [
      "./app/generated/prisma-sensor/**/*",
      "./app/generated/prisma-auth/**/*",
    ],
    "/dashboard": [
      "./app/generated/prisma-sensor/**/*",
    ],
    "/sensors": [
      "./app/generated/prisma-sensor/**/*",
    ],
    "/data": [
      "./app/generated/prisma-sensor/**/*",
    ],
  },
};

export default nextConfig;

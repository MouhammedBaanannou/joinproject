// This file is kept for backward-compatibility.
// Use the specific clients instead:
//   import { prismaAuth }   from "@/lib/prisma-auth"   — for user/auth queries
//   import { prismaSensor } from "@/lib/prisma-sensor"  — for audio/sensor queries
export { prismaAuth as prisma } from "@/lib/prisma-auth";
import { PrismaClient as SensorPrismaClient } from "../app/generated/prisma-sensor";

const globalForPrisma = globalThis as unknown as {
  prismaeSensor: SensorPrismaClient;
};

export const prismaSensor =
  globalForPrisma.prismaeSensor ?? new SensorPrismaClient({ log: [] });

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prismaeSensor = prismaSensor;

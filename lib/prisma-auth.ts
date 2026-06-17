import { PrismaClient as AuthPrismaClient } from "../app/generated/prisma-auth";

const globalForPrisma = globalThis as unknown as {
  prismaAuth: AuthPrismaClient;
};

export const prismaAuth =
  globalForPrisma.prismaAuth ?? new AuthPrismaClient({ log: [] });

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prismaAuth = prismaAuth;

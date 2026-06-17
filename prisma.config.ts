import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// This config is used by the Prisma CLI by default.
// It points to the AUTH schema (primary DB — users, sessions, accounts).
// For the SENSOR DB, use: npx prisma generate --schema=prisma/sensor.prisma
export default defineConfig({
  schema: "prisma/auth.prisma",
  migrations: {
    path: "prisma/migrations/auth",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});

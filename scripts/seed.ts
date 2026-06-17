import { PrismaClient as AuthClient } from "../app/generated/prisma-auth"
import bcrypt from "bcryptjs"

const prisma = new AuthClient()

async function main() {
  const password = await bcrypt.hash("password123", 10)

  const user = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      name: "Test User",
      email: "test@test.com",
      password,
    },
  })

  console.log("✅ User created:", user.email)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
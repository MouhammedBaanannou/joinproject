import { prismaAuth } from "../lib/prisma-auth";

async function main() {
  try {
    const users = await prismaAuth.user.findMany();
    console.log("Users in Auth DB:", users.map(u => ({ id: u.id, email: u.email, name: u.name })));
  } catch (error) {
    console.error("Failed to query auth database:", error);
  } finally {
    await prismaAuth.$disconnect();
  }
}

main();

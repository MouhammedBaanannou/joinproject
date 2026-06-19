import { prismaAuth } from "../lib/prisma-auth";
import bcrypt from "bcryptjs";

async function main() {
  try {
    const user = await prismaAuth.user.findUnique({
      where: { email: "test@test.com" },
    });
    
    if (!user) {
      console.log("User not found!");
      return;
    }
    
    console.log("User password hash in DB:", user.password);
    
    const isBcryptjsValid = await bcrypt.compare("password123", user.password || "");
    console.log("Does 'password123' match using bcryptjs compare?", isBcryptjsValid);
  } catch (error) {
    console.error("Error verifying password:", error);
  } finally {
    await prismaAuth.$disconnect();
  }
}

main();

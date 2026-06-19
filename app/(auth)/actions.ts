"use server"

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth"
import bcrypt from "bcryptjs"
import { prismaAuth } from "@/lib/prisma-auth"

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  try {
    // On success NextAuth sets the session cookie AND throws NEXT_REDIRECT.
    // We MUST let NEXT_REDIRECT propagate — catching it would strip the
    // Set-Cookie header from the response, leaving the browser without a token.
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password" }
        default:
          return { error: "Something went wrong" }
      }
    }
    // Re-throw everything else (including NEXT_REDIRECT).
    throw error
  }
}

export async function signUpAction(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!name || !email || !password) {
    return { error: "Name, email, and password are required" }
  }

  if (!email.includes("@")) {
    return { error: "Invalid email address format" }
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters long" }
  }

  try {
    // Check if user already exists
    const existingUser = await prismaAuth.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return { error: "An account with this email already exists" }
    }

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the new user
    await prismaAuth.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
  } catch (err) {
    console.error("Sign-up database error:", err)
    return { error: "Failed to create user. Please try again." }
  }

  // Auto-login the user after registration
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password" }
        default:
          return { error: "Something went wrong" }
      }
    }
    throw error
  }
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" })
}

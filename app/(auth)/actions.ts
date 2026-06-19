"use server"

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth"

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

export async function signOutAction() {
  await signOut({ redirectTo: "/" })
}
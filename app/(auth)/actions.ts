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
    // redirectTo causes NextAuth to throw NEXT_REDIRECT on success.
    // Next.js intercepts it before the client receives a response,
    // so the session cookie is committed as part of the server-side redirect.
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
    // Re-throw NEXT_REDIRECT and any other non-auth errors.
    // Next.js intercepts NEXT_REDIRECT and navigates to /dashboard.
    throw error
  }
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" })
}
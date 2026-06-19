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
    // Use redirect: false so NextAuth authenticates and sets the cookie
    // without throwing NEXT_REDIRECT. We return success to the client
    // which then does a hard navigation (window.location.href).
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password" }
        default:
          return { error: "Something went wrong" }
      }
    }
    // NextAuth may still throw NEXT_REDIRECT even with redirect:false.
    // If so, the cookie was already set — treat it as success.
    const digest = (error as any)?.digest
    if (typeof digest === "string" && digest.startsWith("NEXT_REDIRECT")) {
      return { success: true }
    }
    throw error
  }
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" })
}

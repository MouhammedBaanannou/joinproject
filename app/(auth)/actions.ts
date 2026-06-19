<<<<<<< HEAD
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
=======
"use server"

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth"
import { cookies } from "next/headers"

const isProd = process.env.NODE_ENV === "production"
const CALLBACK_COOKIE = isProd
  ? "__Secure-authjs.callback-url"
  : "authjs.callback-url"

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

    // Clear any stale callback-url cookie. If it contains a double-encoded
    // URL (e.g. /login?callbackUrl=...) Auth.js's assertConfig will reject
    // the session read silently on every protected page, causing a redirect loop.
    const cookieStore = await cookies()
    cookieStore.delete(CALLBACK_COOKIE)

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
>>>>>>> dd53cf93bf9b24d56cfb7cac30462492b4b752e7

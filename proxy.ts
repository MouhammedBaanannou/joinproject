import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"

export default async function proxy(request: NextRequest) {
  const session = await auth()
  const isLoggedIn = !!session?.user
  const { pathname } = request.nextUrl

  // ── Protected routes — redirect to /login if not authenticated ────────────
  const protectedPaths = ["/dashboard", "/sensors", "/data", "/account"]
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p))

  if (isProtected && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  // ── Already logged in — bounce away from auth pages ──────────────────────
  if (pathname.startsWith("/login") && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/sensors/:path*",
    "/data/:path*",
    "/account/:path*",
    "/login",
  ],
}



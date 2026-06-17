import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

// Next.js 16 proxy — runs on Node.js runtime (no Edge restrictions).
export default async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
    // NextAuth v5 uses __Secure- prefix in production; getToken needs salt
    salt: process.env.NODE_ENV === "production"
      ? "__Secure-authjs.session-token"
      : "authjs.session-token",
  })

  const isLoggedIn = !!token
  const { pathname } = request.nextUrl

  // ── Protected routes — redirect to /login if not authenticated ────────────
  const protectedPaths = ["/dashboard", "/sensors", "/data", "/account"]
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p))

  if (isProtected && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("callbackUrl", request.url)
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

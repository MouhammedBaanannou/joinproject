import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

const isProd = process.env.NODE_ENV === "production"
const SESSION_COOKIE = isProd
  ? "__Secure-authjs.session-token"
  : "authjs.session-token"
const CALLBACK_COOKIE = isProd
  ? "__Secure-authjs.callback-url"
  : "authjs.callback-url"

// Next.js 16 proxy — runs on Node.js runtime (no Edge restrictions).
export default async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
    salt: SESSION_COOKIE,
  })

  const isLoggedIn = !!token
  const { pathname } = request.nextUrl

  // ── Protected routes — redirect to /login if not authenticated ────────────
  const protectedPaths = ["/dashboard", "/sensors", "/data", "/account"]
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p))

  if (isProtected && !isLoggedIn) {
    // Let Auth.js set the callbackUrl cookie itself; we just redirect to /login.
    // Manually appending callbackUrl here causes the cookie to double-encode
    // and Auth.js's assertConfig then rejects the session read (InvalidCallbackUrl).
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  // ── Already logged in — bounce away from auth pages ──────────────────────
  if (pathname.startsWith("/login") && isLoggedIn) {
    const res = NextResponse.redirect(new URL("/dashboard", request.url))
    // Clear any stale callback-url cookie so Auth.js does not pick up a
    // double-encoded value on the next session read and silently reject it.
    res.cookies.delete(CALLBACK_COOKIE)
    return res
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

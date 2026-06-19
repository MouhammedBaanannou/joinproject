import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export async function getSession() {
  try {
    const cookieStore = await cookies();
    
    // Check all secure and non-secure cookie names for both NextAuth and Auth.js
    const cookie =
      cookieStore.get("__Secure-next-auth.session-token") ||
      cookieStore.get("next-auth.session-token") ||
      cookieStore.get("__Secure-authjs.session-token") ||
      cookieStore.get("authjs.session-token");
    
    if (!cookie || !cookie.value) return null;
    
    const secret = process.env.AUTH_SECRET;
    if (!secret) {
      console.error("[getSession] AUTH_SECRET is not defined in environment variables");
      return null;
    }
    
    // Manually decrypt the JWE token using next-auth/jwt's decode function
    const decoded = await decode({
      token: cookie.value,
      secret: secret,
      salt: cookie.name, // The salt must match the exact name of the cookie
    });
    
    if (!decoded || !decoded.email) return null;
    
    return {
      user: {
        id: (decoded.id as string) || (decoded.sub as string),
        email: decoded.email,
        name: decoded.name || null,
        image: (decoded.picture as string) || null,
      },
      expires: decoded.exp ? new Date(Number(decoded.exp) * 1000).toISOString() : "",
    };
  } catch (e) {
    console.error("[getSession] Error decoding session cookie manually:", e);
    return null;
  }
}

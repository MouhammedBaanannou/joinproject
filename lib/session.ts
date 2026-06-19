import { headers } from "next/headers";

export async function getSession() {
  try {
    const reqHeaders = await headers();
    const host = reqHeaders.get("host");
    const proto = reqHeaders.get("x-forwarded-proto") || "http";
    
    const url = `${proto}://${host}/api/auth/session`;
    const res = await fetch(url, {
      headers: {
        cookie: reqHeaders.get("cookie") || "",
      },
      next: { revalidate: 0 },
    });
    
    if (!res.ok) return null;
    const session = await res.json();
    
    if (!session || !session.user) return null;
    return session;
  } catch (e) {
    console.error("[getSession] Error fetching session:", e);
    return null;
  }
}

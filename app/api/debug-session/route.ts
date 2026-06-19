import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const session = await getSession();
    
    // Check what cookies are visible
    const allCookies = cookieStore.getAll().map((c) => ({
      name: c.name,
      valueLength: c.value?.length,
    }));
    
    return NextResponse.json({
      success: true,
      hasSession: !!session,
      session,
      allCookies,
      env: {
        hasAuthSecret: !!process.env.AUTH_SECRET,
        authSecretLength: process.env.AUTH_SECRET?.length,
        nodeEnv: process.env.NODE_ENV,
      }
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error?.message || String(error),
      stack: error?.stack,
    }, { status: 500 });
  }
}

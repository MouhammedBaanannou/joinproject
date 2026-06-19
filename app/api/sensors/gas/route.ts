import { NextRequest } from "next/server"
import { prismaSensor } from "@/lib/prisma-sensor"


export async function GET(request: NextRequest) {
  // ── Query params ─────────────────────────────────────────────

  const { searchParams } = request.nextUrl
  const page   = Math.max(1, parseInt(searchParams.get("page")  ?? "1"))
  const limit  = Math.min(200, parseInt(searchParams.get("limit") ?? "50"))
  const danger = searchParams.get("danger") // "0" | "1" | null (filter)

  const where = danger != null ? { dangerLevel: parseInt(danger) } : {}

  // ── Query ────────────────────────────────────────────────────
  const [data, total] = await Promise.all([
    prismaSensor.gasMeasure.findMany({
      where,
      take: limit,
      skip: (page - 1) * limit,
      orderBy: { id: "desc" },
    }),
    prismaSensor.gasMeasure.count({ where }),
  ])

  return Response.json({
    data,
    meta: { page, limit, total, pages: Math.ceil(total / limit) },
  })
}

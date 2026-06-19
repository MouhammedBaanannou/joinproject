import { NextRequest } from "next/server"
import { prismaSensor } from "@/lib/prisma-sensor"

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1"))
  const limit = Math.min(200, parseInt(searchParams.get("limit") ?? "50"))

  const [data, total] = await Promise.all([
    prismaSensor.mesureCapteur.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: { id: "desc" },
    }),
    prismaSensor.mesureCapteur.count(),
  ])

  return Response.json({
    data,
    meta: { page, limit, total, pages: Math.ceil(total / limit) },
  })
}

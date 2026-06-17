import { NextRequest } from "next/server"
import { auth } from "@/auth"
import { prismaSensor } from "@/lib/prisma-sensor"

export async function GET(request: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = request.nextUrl
  const page   = Math.max(1, parseInt(searchParams.get("page")  ?? "1"))
  const limit  = Math.min(200, parseInt(searchParams.get("limit") ?? "50"))
  const statut = searchParams.get("statut") // e.g. "alerte collision"

  const where = statut ? { statut: { contains: statut } } : {}

  const [data, total] = await Promise.all([
    prismaSensor.capteurReculHistory.findMany({
      where,
      take: limit,
      skip: (page - 1) * limit,
      orderBy: { id: "desc" },
    }),
    prismaSensor.capteurReculHistory.count({ where }),
  ])

  return Response.json({
    data,
    meta: { page, limit, total, pages: Math.ceil(total / limit) },
  })
}

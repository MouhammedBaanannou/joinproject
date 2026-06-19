import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import DataClient from "./DataClient";

export const dynamic = "force-dynamic";

export default async function DataPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login?callbackUrl=/data");
  }

  return <DataClient />;
}

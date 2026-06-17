import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DataClient from "./DataClient";

export default async function DataPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login?callbackUrl=/data");
  }

  return <DataClient />;
}

import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import AccountClient from "./AccountClient";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login?callbackUrl=/account");
  }

  return <AccountClient user={session.user} />;
}

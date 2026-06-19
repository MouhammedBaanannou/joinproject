import { auth } from "@/auth";
import AccountClient from "./AccountClient";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const session = await auth();
  const user = session?.user || { name: "Operator", email: "" };

  return <AccountClient user={user} />;
}


import { auth } from "@/auth";
import AccountClient from "./AccountClient";

// Auth gating is handled by proxy.ts.
// We still call auth() here to pass user data to the client component.
export default async function AccountPage() {
  const session = await auth();

  return (
    <AccountClient
      user={session?.user ?? { name: null, email: null, image: null }}
    />
  );
}

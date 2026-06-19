import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prismaAuth } from "@/lib/prisma-auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  debug: true,
  // No PrismaAdapter needed — we use JWT sessions + Credentials only.
  // The adapter is only required for OAuth providers or database sessions.

  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        try {
          console.log("[auth.ts] authorize: Querying user:", credentials.email);
          const user = await prismaAuth.user.findUnique({
            where: { email: credentials.email as string },
          });
          console.log("[auth.ts] authorize: Found user:", !!user);

          if (!user || !user.password) return null;

          const valid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
          console.log("[auth.ts] authorize: Password valid:", valid);

          if (!valid) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          };
        } catch (err: any) {
          console.error("[auth.ts] authorize: DB or bcrypt error:", err);
          throw err;
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = (user as any).username ?? null
        token.role = (user as any).role ?? null
      }
      return token
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
      }
      return session
    },
  },

  pages: {
    signIn: "/login",
  },
})
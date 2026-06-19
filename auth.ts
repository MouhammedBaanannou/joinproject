import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prismaAuth } from "@/lib/prisma-auth"

const isProduction = process.env.NODE_ENV === "production"

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,

  cookies: {
    sessionToken: {
      name: isProduction
        ? "__Secure-authjs.session-token"
        : "authjs.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: isProduction,
      },
    },
    callbackUrl: {
      name: isProduction
        ? "__Secure-authjs.callback-url"
        : "authjs.callback-url",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: isProduction,
      },
    },
    csrfToken: {
      name: isProduction
        ? "__Host-authjs.csrf-token"
        : "authjs.csrf-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: isProduction,
      },
    },
  },

  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prismaAuth.user.findUnique({
          where: { email: credentials.email as string },
        })

        if (!user || !user.password) return null

        const valid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!valid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
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
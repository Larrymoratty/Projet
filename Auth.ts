// src/auth/authOptions.ts
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { verifyPassword } from "@/utils/password";
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) throw new Error("Credentials not provided");
        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        if (user && await verifyPassword(credentials.password, user.password || '')) {
          return user;
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  pages: {
    signIn: '/connexion',
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
    };
      return token;
    },
    async session({ session, user }) {
        if (user) {
            session.user.id = user.id 
            session.user.name = user?.name;
            session.user.email = user?.email;
            session.user.role = user?.role;
            session.user.level = user?.level
          }
          return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
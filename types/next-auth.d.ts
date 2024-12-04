import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Ajoute l'ID de l'utilisateur
      name?: string | null;
      email: string | null;
      level?: number
      role : string | null;
    } & DefaultSession["user"]; // Conserve les autres propriétés
  }

}
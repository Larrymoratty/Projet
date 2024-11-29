import { DefaultSession, DefaultUser } from "next-auth";
// Étendre le type User
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // ID de l'utilisateur
      name?: string | null;
      email: string;
      role: string;
      level: number;
    };
  }
  interface User extends DefaultUser {
    id: string;
    role: string;
    level: number;
  }
}
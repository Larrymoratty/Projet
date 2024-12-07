import { authOptions } from '@/auth';
import NextAuth from 'next-auth';

// Crée un handler pour NextAuth
const handler = NextAuth(authOptions);

// Exporte le handler pour chaque méthode HTTP utilisée par NextAuth
export { handler as GET, handler as POST };

"use client"; // Indiquer que ce composant est un composant client

import { SessionProvider } from "next-auth/react";

const ClientProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ClientProvider;
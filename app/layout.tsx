import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "GabonConnected",
  description: "by mbimbi larry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(poppins.variable, 'antialiased font-poppins')}
      >
        {children}
      </body>
    </html>
  );
}

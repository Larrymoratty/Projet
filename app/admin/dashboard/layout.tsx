import { cn } from "@/lib/utils";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main
          className={cn('antialiased font-poppins min-h-[100vh]')}
        >
          {children}
        </main>
    );
  }
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ContextProvider from "@/components/provider/context/ContextProvider";
import SeekearchCard from "@/components/card/SeekearchCard";
import { Analytics } from "@vercel/analytics/react"
// const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Seekearch",
  description: "Seek and Search across your favorite websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased scrollbar",
          fontSans.variable
        )}
      >
        <ContextProvider>
          <div className="flex justify-center">
            <SeekearchCard />
          </div>
          {children}
        </ContextProvider>
        <Analytics/>
      </body>
    </html>
  );
}

import { NextAuthProvider } from "@/providers/next-auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";

import RecoidContextProvider from "./recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "USER",
  description: "user portal for gymcents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <RecoidContextProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </html>
      </RecoidContextProvider>
    </NextAuthProvider>
  );
}

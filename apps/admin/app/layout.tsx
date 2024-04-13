import type { Metadata } from "next";
import { NextAuthProvider } from "../providers/next-auth";
import RecoidContextProvider from "./recoilContextProvider";

import { inter, satoshi } from "@/styles/fonts";
import "@/styles/globals.css";
import { TooltipProvider } from "@gymcents/ui/src/tooltip";
import { cn } from "@gymcents/utils";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "ADMIN",
  description: "course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(satoshi.variable, inter.variable)}>
      <body>
        {" "}
        <NextAuthProvider>
          <RecoidContextProvider>
            <TooltipProvider>
              <Toaster closeButton />
              {children}
            </TooltipProvider>
          </RecoidContextProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}

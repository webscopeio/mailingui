import { ReactNode } from "react";
import Header from "@/components/header/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen bg-neutral-500">
        <Header />
        {children}
      </body>
    </html>
  );
}

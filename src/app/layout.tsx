import { ReactNode } from "react";
import { Header } from "@components/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}

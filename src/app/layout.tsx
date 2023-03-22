import { Metadata } from "next";
import { ReactNode } from "react";
import { Header } from "@components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MailingUI",
    template: "%s | MailingUI",
  },
  description: "Easy to build an email with React & MJML",
  keywords: ["email", "mail", "mjml", "react", "html"],
  colorScheme: "dark",
  applicationName: "MailingUI",
  openGraph: {
    title: "MailingUI",
    description: "Easy to build an email with React & MJML",
    url: "https://mailingui.vercel.app/",
    siteName: "MailingUI",
    locale: "en-US",
    type: "website",
  },
};

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

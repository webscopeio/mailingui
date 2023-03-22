import { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { Header } from "@components/Header";
import "./globals.css";

const basierCircle = localFont({
  src: [
    {
      path: "fonts/BasierCircle-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/BasierCircle-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "fonts/BasierCircle-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/BasierCircle-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "fonts/BasierCircle-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/BasierCircle-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "fonts/BasierCircle-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/BasierCircle-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-basier-circle",
});

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
    <html lang="en" className={basierCircle.variable}>
      <head />
      <body className="h-screen bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}

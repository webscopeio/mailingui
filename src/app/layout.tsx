import { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { Footer } from "@components/Footer";
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
  icons: {
    icon: [
      {
        url: "/static/favicons/favicon-32.svg",
        type: "image/svg+xml",
      },
      {
        url: "/static/favicons/favicon-32.ico",
        sizes: "any",
      },
    ],
    apple: "/static/favicons/favicon-512.png",
    shortcut: "/static/favicons/favicon-512.png",
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
      <head>
        {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && (
          <script
            defer
            data-domain="mailingui.com"
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="flex min-h-screen flex-col bg-black text-white">
        {children}
        <div className="mt-auto pt-16 md:pt-32">
          <Footer />
        </div>
      </body>
    </html>
  );
}

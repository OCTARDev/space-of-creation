import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import ClientProvider from "@/components/hooks/ClientProvider";
import { Suspense } from "react";
import "@/assets/styles/globals.css";




export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200","300","400","500","600","700","800","900"],
  display: "swap",
  variable: "--font-cairo", // important for Tailwind
});

export const metadata: Metadata = {
  title: "space of creation",
  description: "space of creation Website",
  icons:{
    // icon:"/logo/logo-light.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={``}
      >
        <ClientProvider>
          <Suspense fallback={<div>Loading...</div>} >
              {children}
          </Suspense>
        </ClientProvider>
      </body>
    </html>
  );
}

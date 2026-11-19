import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import ClientProvider from "@/components/hooks/ClientProvider";
import { Suspense } from "react";
import "@/assets/styles/globals.css";
import Loader from "@/components/ui/Loader";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "space of creation",
  description: "space of creation Website",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} ${cairo.className}`}>
        <ClientProvider>
          <Suspense fallback={<Loader />}>
            {children}
          </Suspense>
        </ClientProvider>
      </body>
    </html>
  );
}

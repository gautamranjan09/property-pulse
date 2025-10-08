import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Property Pulse",
  keywords:"rental, property, real estate",
  description: "Find the perfect rental property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

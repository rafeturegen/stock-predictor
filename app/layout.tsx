import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Success Ladder",
  description: "Guiding students with a structured ladder for their academic comeback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-stone-950"}>
        <Header signedIn={false}/>
        {children}
      </body>
    </html>
  );
}

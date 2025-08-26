import { Metadata } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gene Horse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

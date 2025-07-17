import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "isudiptodas",
  description: "Full stack developer and UI designer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

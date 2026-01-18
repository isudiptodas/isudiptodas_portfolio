import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "isudiptodas",
  description: "Portfolio website of Sudipto Das.",
  creator: 'Sudipto Das',
  keywords: ['portfolio', 'isudiptodas']
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


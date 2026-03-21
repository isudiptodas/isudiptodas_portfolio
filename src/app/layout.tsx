import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "isudiptodas | Portfolio",
  description: "Sudipto Das is a full stack developer along with that he also excels in Web development, System Design, Cloud & DevOps",
  creator: 'Sudipto Das',
  keywords: ['web developer', 'cloud', 'devops', 'full stack developer']
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


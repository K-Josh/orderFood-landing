import type { Metadata } from "next";
import { Sofia_Sans, Sofia_Sans_Semi_Condensed } from "next/font/google"
import "./globals.css";

const sofiaSans = Sofia_Sans({ subsets: ['latin'],
  variable: '--font-sofia',
  weight: ['300', '400']
 });

 const sofiaSansCondensed = Sofia_Sans_Semi_Condensed({ subsets: ['cyrillic'],
  variable: "--font-sofiaCondensed", 
  weight: ['300', '400']
  });

export const metadata: Metadata = {
  title: "Food order",
  description: "Generated by create next app",
  icons: {
    icon: '/assets/darkLogo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sofiaSans.variable} ${sofiaSansCondensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

import { Syne, Sora } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Jay Kumar — Web Developer",
  description:
    "Portfolio of Jay Kumar — aspiring web developer building modern interfaces with React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-[var(--ink)]">
        <div className="site-bg" aria-hidden="true">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
        </div>
        {children}
      </body>
    </html>
  );
}

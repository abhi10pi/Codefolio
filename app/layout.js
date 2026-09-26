import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abhishek Pimpalkar — Backend Developer",
  description: "Backend Developer specializing in Java & Spring Boot with full-stack capabilities in React & Next.js. Final-year B.Tech (AI) student at GH Raisoni College, Pune.",
  icons: {
    icon: "/PortfolioLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgressBar />
        {/* <CustomCursor /> */}
        <SmoothScroll>{children}</SmoothScroll>
      
        <Analytics />
      </body>
    </html>
  );
}

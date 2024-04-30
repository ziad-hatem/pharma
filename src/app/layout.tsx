import type { Metadata } from "next";
import { Figtree, Inter, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import TopofNavbar from "./components/TopofNavbar";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import '../i18n';
import { motion } from "framer-motion"
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

export const metadata = {
  title: {
    absolute: "",
    default: "Armana Pharma",
    template: "%s | Armana Pharma",
  },
  description: "Armana Pharma",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${openSans.variable}}`}>
        <div className="navbar">
          <TopofNavbar />
          <Navbar />
        </div>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

import { ReactNode } from "react";
import Navbar from "../app/Components/Navbar";
import Hero from "../app/Components/Hero";
import Intro from "../app/Components/Intro";
import Footer from "../app/Components/Footer";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>AF.SAFARI</title>
      </head>
      <body>
        <Navbar />
        <Hero />
        <Intro />
        <Footer />
      </body>
    </html>
  );
}

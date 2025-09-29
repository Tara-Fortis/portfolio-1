import type { Metadata } from "next";
import "./globals.css";

// shared NavBar component
import Navbar from "./components/Navbar";

// shared Footer component
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "COMP2112 | Tineil Armstrong",
  description: "Portfolio for Tineil Armstrong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>

  );
}

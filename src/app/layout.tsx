import type { Metadata } from "next";
// bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

// shared NavBar component
import Header from "./components/Header";

// shared Footer component
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "COMP2112 | Tineil Armstrong",
  description: "Portfolio for Tineil Armstrong",
  icons: {
    icon: "brain.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

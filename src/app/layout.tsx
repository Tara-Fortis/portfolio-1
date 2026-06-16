import type { Metadata } from "next";
// bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

// shared NavBar component
import Header from "./components/Header";

// shared Footer component
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Tineil Armstrong | UX/UI & Web Developer",
  description: "Portfolio of Tineil Armstrong, a UX/UI developer and web designer specializing in accessible, responsive, and high-performance web applications.",
  icons: {
    icon: "/brain.svg",
  },
  authors: [{ name: "Tineil Armstrong" }],
  openGraph: {
    title: "Tineil Armstrong | UX/UI & Web Developer",
    description: "Accessible, responsive, and high-performance digital experiences.",
    url: "https://www.tineil.ca",
    locale: "en_CA",
    type: "website",
    images: "/portfolio-photo.jpeg"
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

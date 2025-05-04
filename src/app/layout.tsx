import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google"; // Import Merriweather
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Setup fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter', // Assign CSS variable for body text
});
const merriweather = Merriweather({ 
  subsets: ["latin"], 
  weight: ['400', '700'], // Include needed weights
  variable: '--font-merriweather', // Assign CSS variable for headings
});

export const metadata: Metadata = {
  title: "موقع الموسيقى الأوروبية",
  description: "بوابة بحثية شاملة لاستكشاف التراث الموسيقي الأوروبي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${merriweather.variable}`}> {/* Add font variables to html tag */}
      <body> {/* Remove inter.className from body if applying fonts via CSS variables */}
        <Header />
        <main className="container mx-auto px-4 py-8 min-h-screen font-sans"> {/* Apply base sans-serif font */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


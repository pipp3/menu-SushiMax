import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-inter'
});

export const metadata = {
  title: "SushiMax - Tu mejor opción en sushi",
  description: "Restaurante de sushi y comida japonesa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow bg-[#FFF2F2]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

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
  description: "Restaurante de sushi y comida japonesa en [tu ubicación]. Disfruta de los mejores rolls, sashimi y platos japoneses auténticos. Pedidos online y entrega a domicilio.",
  keywords: "sushi, comida japonesa, rolls, sashimi, restaurante japonés, pedidos online, entrega a domicilio",
  authors: [{ name: "SushiMax" }],
  creator: "SushiMax",
  publisher: "SushiMax",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.svg',
  },
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

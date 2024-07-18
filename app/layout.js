import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import CarouselMovie from "./_component/Carousel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s DB Screens Streaming",
    default: "Home | DB Screens Streaming",
  },

  description:
    "DB Screens Streaming - Streaming DB Screens on your server without any hassle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main className="relative overflow-hidden">
          <CarouselMovie />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

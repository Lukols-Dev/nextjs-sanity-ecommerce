import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CartModal from "@/components/modal/CartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Shop",
  description:
    "An example of an online shop offering a wide selection of clothing for everyone. Discover the latest trends and enjoy high fashion with our unique collection for men, women and children. High quality, affordable prices and exceptional customer service - it's all waiting for you with us.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartModal />
        <Navbar />
        <div className="h-[77px] w-full bg-white"></div>
        <div className="pb-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

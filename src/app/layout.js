import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#ede2cb]">
      <body
        className={`${montserrat.variable} antialiased max-w-screen-xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}

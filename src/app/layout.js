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
        className={`${montserrat.variable} antialiased max-w-screen-xl relative mx-auto`}
      >
        <main className="relative">
          <header className="absolute w-full px-3">
            <Header />
          </header>
          {children}
          <footer className="absolute bottom-3 w-full px-3">
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}

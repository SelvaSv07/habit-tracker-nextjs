import Home from "./_components/Home";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Root() {
  return (
    <main className="relative">
      <header className="absolute w-full px-3">
        <Header />
      </header>
      <Home />
      <footer className="absolute bottom-3 w-full px-3">
        <Footer />
      </footer>
    </main>
  );
}

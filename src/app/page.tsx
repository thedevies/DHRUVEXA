import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </>
  );
}

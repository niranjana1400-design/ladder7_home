import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Business from "../components/Business";
import Services from "../components/Services";
import Partnership from "../components/Partnership";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f8fc] text-[#0d1b38] transition-colors duration-500 dark:bg-[#080b12] dark:text-white">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />
        <Products />
        <Business />
        <Services />
        <Partnership />
        <CTA />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
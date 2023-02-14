import { useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Serivces";
import Testimonials from "./components/Testimonials";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 to-gray-900 dark:text-white">
        <Hero />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import FAQs from "./components/FAQs/FAQs";
import { Integrations } from "./components/Integrations/Integrations";
import FeaturedProducts from "./components/FeaturedProducts";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <main className="overflow-x-hidden">
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "#ffffff",
            mixBlendMode: "difference",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Navbar />
          <Hero />
        </UpdateFollower>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "#ffffff",
            mixBlendMode: "difference",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Services />
          <Banner />
          <BannerText />
          <FeaturedProducts />
          <Blogs />
          {/* <Integrations /> */}
          <FAQs />
          <Footer />
        </UpdateFollower>
      </main>
    </>
  );
};

export default App;

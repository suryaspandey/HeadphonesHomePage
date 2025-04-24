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
      <Navbar />

      <main className="overflow-x-hidden pl-0 md:pl-40">
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            mixBlendMode: "difference",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Hero theme={theme} />
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
        </UpdateFollower>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            mixBlendMode: "difference",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Banner />
          {/* <BannerText /> */}
          <FeaturedProducts />
        </UpdateFollower>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "black",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Blogs />
        </UpdateFollower>
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            mixBlendMode: "difference",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Integrations />
          <FAQs />
          <Footer />
        </UpdateFollower>
      </main>
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services";
import Contact from "./Contact";

export const Home = () => {
  /* const data = {
    name: "Fullstack Devloper",
    image: "./img/hero.svg",
  }; */

  const { updateHomePage } = useGlobalContext();
  useEffect(() => updateHomePage(), []);
  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
};
export default Home;

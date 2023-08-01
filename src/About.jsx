import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

export const About = () => {
  /*  const data = {
    name: "Harendar Pundir",
    image: "./img/about.jpg",
  }; */
  const { updateAboutPage } = useGlobalContext();
  useEffect(() => updateAboutPage(), []);
  return <HeroSection />;
};
export default About;

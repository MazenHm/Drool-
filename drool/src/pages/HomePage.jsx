import React from "react";
import Headers from "./Headers";
import AllFooter from "./AllFooter";
import Main from "../components/Main";
import QuizSection from "../components/QuizSection";
import Trending from "../components/Trending";
import HottestProducts from "../components/HottestProducts";
import Theme from "../components/Theme";
import Medium from "../components/Medium";
import OurStory from "../components/OurStory";

const HomePage = () => {
  return (
    <>
      <Headers />

      <Main />
      
      <QuizSection />
      <Trending />
      <HottestProducts />
      <Medium />
      <Theme />
      <OurStory />

      <AllFooter />
    </>
  );
};

export default HomePage;

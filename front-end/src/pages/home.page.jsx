import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import HeroGrid from "../components/Home/HeroGrid";
import Categories from "../components/Home/Categories";
import TrendingSection from "../components/Home/TrendingSection/TrendingSection";
import { useState } from "react";

function HomePage() {
  return (
    <>
      <main>
        <Navigation />
        <br></br>
        <br/>
        <br/>
        <br/>
        <HeroGrid />
        {/*<Categories />*/}
        <TrendingSection />
        <Footer />
      </main>
    </>
  );
}
export default HomePage;
import React from "react";
import NavigationBar from "../components/Home/NavigationBar";
import CarouselHero from "../components/Home/CarouselHero";
import MainContent from "../components/Home/MainHome/MainContent";
import Footer from "../components/Home/Footer";

function Home() {
  return (
    <>
        <NavigationBar />      
        <CarouselHero />
        <MainContent />
        <Footer />
    </>
  );
}

export default Home;
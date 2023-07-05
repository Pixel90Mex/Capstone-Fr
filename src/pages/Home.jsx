import React from "react";
import NavigationBar from '../components/NavigationBar';
import CarouselHero from "../components/CarouselHero";
import MainContent from "../components/MainContent";

function Home() {
  return (
    <>
        <NavigationBar />      
        <CarouselHero />
        <MainContent />
    </>
  );
}

export default Home;
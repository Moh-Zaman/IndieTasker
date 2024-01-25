import Carousel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";
import Slide from "../../components/Slide/Slide"

import "./Home.css";

function Home() {
  return (
    <div className="home-page">
        <Hero />
        <Slide />
        <Carousel />
    </div>
  );
}

export default Home;

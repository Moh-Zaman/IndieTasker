import Carousel from "../../components/Carousel/Carousel";
import CatCard from "../../components/CatCard/CatCard";
import Hero from "../../components/Hero/Hero";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">
        <Hero />
        <CatCard />
        <Carousel />
    </div>
  );
}

export default Home;

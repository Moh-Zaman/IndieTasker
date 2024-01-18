import Carousel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Carousel />
    </div>
  );
}

export default Home;

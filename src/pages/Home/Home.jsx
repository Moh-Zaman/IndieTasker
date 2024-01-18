import Carousel from "../../components/Carousel/Carousel";
import Hero from "../../components/Hero/Hero";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

import "./Home.css";

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <Carousel />
            <GoogleMaps />
        </div>
    );
}

export default Home;

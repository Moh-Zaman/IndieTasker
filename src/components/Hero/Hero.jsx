import React from "react";

import "./Hero.css";

function Hero() {
    return (
        <div className="hero-container">
            <div className="row hero-row">
                <div className="col-4 hero-inputs">
                    <div className="hero-search">
                        <input className="hero-searchText" type="text" name="" placeholder="Search for a Tasker" />
                        <button className="hero-searchBtn" href="#">
                            <img src="src\assets\Hero\SearchIcon.png" />
                        </button>
                    </div>
                    <div className="radio-inputs">
                        <label className="radio">
                            <input type="radio" name="radio"/>
                            <span className="name">Any</span>
                        </label>
                        <label className="radio">
                            <input type="radio" name="radio"/>
                            <span className="name">Location</span>
                        </label>
                            
                        <label className="radio">
                            <input type="radio" name="radio"/>
                            <span className="name">Category</span>
                        </label>
                    </div>
                </div>
                <div className="col-4 hero-image">
                    <img src="src\assets\Hero\HeroImage.jpg" alt="Hero image of man" />
                </div>
            </div>
        </div>
    )
}

export default Hero;

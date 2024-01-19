import React from "react";
import { useRef, useEffect, useState } from "react";

import "./Hero.css";



function Hero() {

    const [heroClassName, setClassName] = useState('hero-searchText');
    
    const HeroTxt = useRef(null);

    useEffect(() => {
        const handleInput = () => {
            setClassName(HeroTxt.current.value.trim() === '' ? 'hero-searchText' : 'hero-searchTextOpen')
        }

        HeroTxt.current.addEventListener('input', handleInput);

        return () => {
            HeroTxt.current.removeEventListener('input', handleInput);
        };
    }, []);


    return (
        <div className="hero-container">
            <div className="row hero-row hero-image">
            <img src="\src\assets\Hero\Banner-png\1600x500HeroBanner(withFilter).png" alt="Hero banner collage" />
                <div className="col-4 hero-inputs">
                    <div className="hero-search">
                        <input className={heroClassName} ref={HeroTxt} type="text" name="" placeholder="Search for a Tasker" />
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
            </div>
        </div>
    )
}

export default Hero;

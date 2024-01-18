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
            <div className="row hero-row">
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
                <div className="col-4 hero-image">
                    <img src="src\assets\Hero\HeroImage.jpg" alt="Hero image of man" />
                </div>
            </div>
        </div>
    )
}

export default Hero;

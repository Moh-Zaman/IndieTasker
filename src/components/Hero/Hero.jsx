import React from "react";
import { useRef, useEffect, useState } from "react";

import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
    const [heroClassName, setClassName] = useState("hero-searchText");

    // // Animation IF ADDED BACK IN REMEMBER TO PUT IN ref={HeroTxt} IN INPUT BUTTON
    // const [heroClassName, setClassName] = useState('hero-searchText');
    
    // const HeroTxt = useRef(null);

    // useEffect(() => {
    //     const handleInput = () => {
    //         setClassName(HeroTxt.current.value.trim() === '' ? 'hero-searchText' : 'hero-searchTextOpen')
    //     }

    //     HeroTxt.current.addEventListener('input', handleInput);

    //     return () => {
    //         HeroTxt.current.removeEventListener('input', handleInput);
    //     };
    // }, []);

    //Search pass results
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (value) => {
        setSearchValue(value);
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (val) => {
        setSelectedOption(val.target.value)
    }

    const handleSearchSubmit = () => {
        if (selectedOption === 'country'){
            navigate(`/tasker?country=${searchValue}`)
        } else if (selectedOption === 'all') {
            navigate(`/tasker?search=${searchValue}`)
        } else if (selectedOption === 'job') {
            navigate(`/tasker?job=${searchValue}`)
        }
    }
    
    return (
        <div className="hero-container">
            <div className="row hero-row hero-image">
                <img src="./assets/Hero/Banner-png/1600x500HeroBanner(withFilter).png" alt="Hero banner collage" />
                <div className="col-4 hero-inputs">
                    <div className="hero-search">
                        <input className="hero-searchTextOpen" type="text" value={searchValue} name="" placeholder="Search for a Tasker" onChange={(e) => handleSearchChange(e.target.value)} />
                        <button className="hero-searchBtn" onClick={handleSearchSubmit}>
                            <img src="./assets/Hero/SearchIcon.png" />
                        </button>
                    </div>
                    <div className="radio-inputs">
                        <label className="radio">
                            <input type="radio" name="radio" value="all" checked={selectedOption === 'all'} onChange={handleOptionChange}/>
                            <span className="name">All</span>
                        </label>
                        <label className="radio">
                            <input type="radio" name="radio" value="country" checked={selectedOption === 'country'} onChange={handleOptionChange}/>
                            <span className="name">Country</span>
                        </label>
                        <label className="radio">
                            <input type="radio" name="radio" value="job" checked={selectedOption === 'job'} onChange={handleOptionChange}/>
                            <span className="name">Occupation</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

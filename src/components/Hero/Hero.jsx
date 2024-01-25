import React from "react";
import { useRef, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
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
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (val) => {
    setSelectedOption(val.target.value);
  };

  const handleSearchSubmit = () => {
    if (selectedOption === "country") {
      navigate(`/tasker?country=${searchValue}`);
    } else if (selectedOption === "name") {
      navigate(`/tasker?search=${searchValue}`);
    } else if (selectedOption === "job") {
      navigate(`/tasker?job=${searchValue}`);
    }
  };
  return (
    <Card className="hero-container">
      <div className="row hero-row">
        <Card.Img
          src="./assets/Hero/Banner-png/1600x500HeroBanner(withFilter).png"
          className="hero-image"
        />
        <div className="col-4 hero-inputs">
          <div className="hero-search">
            <input
              className="hero-searchTextOpen"
              type="text"
              value={searchValue}
              name=""
              placeholder="Search for a Tasker"
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <button className="hero-searchBtn" onClick={handleSearchSubmit}>
              <img src="./assets/Hero/SearchIcon.png" />
            </button>
          </div>
          <div className="radio-inputs">
            <label className="radio">
              <input
                type="radio"
                name="radio"
                value="name"
                checked={selectedOption === "name"}
                onChange={handleOptionChange}
              />
              <span className="name">Name</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                value="country"
                checked={selectedOption === "country"}
                onChange={handleOptionChange}
              />
              <span className="name">Country</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="radio"
                value="job"
                checked={selectedOption === "job"}
                onChange={handleOptionChange}
              />
              <span className="name">Occupation</span>
            </label>
          </div>
        </div>
      </div>{" "}
    </Card>
  );
}

export default Hero;

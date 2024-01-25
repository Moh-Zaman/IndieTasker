import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import CatCard from "../CatCard/CatCard/";
import "./Slide.css";

const leftArrow = <FontAwesomeIcon icon={faCircleChevronLeft} size="3x" />;
const rightArrow = <FontAwesomeIcon icon={faCircleChevronRight} size="3x" />;

let variants = {
  farLeft: { x: "120%", scale: 0.5, filter: "blur(5px)", zIndex: 1},
  left: { x: "90%", scale: 0.7, filter: "blur(5px)", zIndex: 2 },
  center: { x: "0%", scale: 1, zIndex: 3 },
  right: { x: "-90%", scale: 0.7, filter: "blur(5px)", zIndex: 2 },
  farRight: { x: "-120%", scale: 0.5, filter: "blur(5px)", zIndex: 1}
};

function Slide() {
  const [positionIndex2, setPositionIndex2] = useState([0, 1, 2]);

  function handleNext(e) {
    let btnId = e.currentTarget.id;

    if (btnId === "L3") {
      variants.left.zIndex = 0;
      variants.right.zIndex = 1;
      setPositionIndex2((prevIndex) => {
        const updatedIndex = prevIndex.map((prevInd) => (prevInd + 1) % 3);
        return updatedIndex;
      });
    } else if (btnId === "R3") {
      variants.left.zIndex = 1;
      variants.right.zIndex = 0;
      setPositionIndex2((prevIndex) => {
        const updatedIndex = prevIndex.map((prevInd) => (prevInd + 2) % 3);
        return updatedIndex;
      });
    }
  }

  const positions = ["farLeft", "left", "center", "right", "farRight"];

  const cards2 = [<CatCard />, <CatCard />, <CatCard />, <CatCard />, <CatCard />, <CatCard />];

  return (
    <>
    <h1 className="featured-section-title">Featured Taskers</h1>
        <div className="slide">
          <div className="slide-container">
          <h3 className="freelancer-type">HandyPeople</h3>

          <i className="left-arrow" id="L3" onClick={handleNext}>
            {leftArrow}
          </i>

          {cards2.map((card, index) => (
            <motion.div
              key={index + "2"}
              className="item"
              initial="center"
              animate={positions[positionIndex2[index]]}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              {card}
            </motion.div>
          ))}

          <i className="right-arrow" id="R3" onClick={handleNext}>
            {rightArrow}
          </i>
        </div>
        </div>
  </>
  );
}

export default Slide;


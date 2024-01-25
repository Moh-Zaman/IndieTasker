import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import CatCard from "../CatCard/CatCard/";
import catArr from "../../data/catCardData.json";
import "./Slide.css";

const leftArrow = <FontAwesomeIcon icon={faCircleChevronLeft} size="3x" />;
const rightArrow = <FontAwesomeIcon icon={faCircleChevronRight} size="3x" />;

function Slide() {
    return (
        <div classname="slider-container">
            <motion.div className="slider">
                <motion.div drag="x" className="inner-slider">
                    {catArr.map((card) => {
                        return (
                            <motion.div className="cat">
                                <CatCard title={card.title} img={card.img} desc={card.desc} id={card.id} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Slide;

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import CatCard from "../CatCard/CatCard/";
import catArr from "../../data/catCardData.json";
import "./Slide.css";

const leftArrow = <FontAwesomeIcon icon={faCircleChevronLeft} size="3x" />;
const rightArrow = <FontAwesomeIcon icon={faCircleChevronRight} size="3x" />;

function Slide() {
    const cardWidth = 450; // Adjust this value according to your card width
    const cardCount = catArr.length;
    const totalWidth = cardWidth * cardCount;

    return (
        <div className="slider-container">
            <h1 className="slider-section-title">Tasker Categories</h1>
            <div className="slider-container">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left:  -totalWidth + window.innerWidth, 
                        right: 0, // Allow dragging to the right until the beginning of cards
                    }}
                    dragElastic={0.1} // Adjust the drag elasticity
                    className="slider"
                >
                    <motion.div
                        style={{ width: totalWidth }}
                        className="inner-slider"
                    >
                        {catArr.map((card, index) => (
                            <motion.div
                                key={index}
                                className="cat"
                                style={{ width: cardWidth }}
                            >
                                <CatCard
                                    title={card.title}
                                    img={card.img}
                                    desc={card.desc}
                                    id={card.id}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Slide;
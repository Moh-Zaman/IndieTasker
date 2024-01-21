import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import FreelancerCard from "../FreelancerCard/FreelancerCard";

import "./Carousel.css";

const leftArrow = <FontAwesomeIcon icon={faCircleChevronLeft} size="3x" />;
const rightArrow = <FontAwesomeIcon icon={faCircleChevronRight} size="3x" />;

let sleep = false;
function Carousel() {
    const [positionIndex, setPositionIndex] = useState([0, 1, 2]);
    const [positionIndex1, setPositionIndex1] = useState([0, 1, 2]);
    const [positionIndex2, setPositionIndex2] = useState([0, 1, 2]);

    const left1 = useRef();

    function handleNext() {
        setPositionIndex((prevIndex) => {
            const updatedIndex = prevIndex.map((prevInd) => (prevInd + 1) % 3);
            return updatedIndex;
        });
    }

    function sleepScroll() {
        if (sleep === false) {
            handleNext();
        }
        sleep = true;
        setTimeout(function () {
            sleep = false;
        }, 200);
    }

    function handleNext1() {
        setPositionIndex1((prevIndex) => {
            const updatedIndex = prevIndex.map((prevInd) => (prevInd + 1) % 3);
            return updatedIndex;
        });
    }

    function sleepScroll1() {
        if (sleep === false) {
            handleNext1();
        }
        sleep = true;
        setTimeout(function () {
            sleep = false;
        }, 200);
    }

    function handleNext2() {
        setPositionIndex2((prevIndex) => {
            const updatedIndex = prevIndex.map((prevInd) => (prevInd + 1) % 3);
            return updatedIndex;
        });
    }

    function sleepScroll2() {
        if (sleep === false) {
            handleNext2();
        }
        sleep = true;
        setTimeout(function () {
            sleep = false;
        }, 200);
    }

    const cards = [<FreelancerCard />, <FreelancerCard />, <FreelancerCard />];
    const cards1 = [<FreelancerCard />, <FreelancerCard />, <FreelancerCard />];
    const cards2 = [<FreelancerCard />, <FreelancerCard />, <FreelancerCard />];

    const positions = ["left", "center", "right"];

    let variants = {
        left: { x: "90%", scale: 0.7, filter: "blur(5px)" },
        center: { x: "0%", scale: 1 },
        right: { x: "-90%", scale: 0.7, filter: "blur(5px)" },
    };

    return (
        <>
            <h1 className="featured-title">Featured Taskers</h1>
            <div className="carousel-container">
                <div className="carousel">
                    <h3 className="freelancer-type">Carpenters</h3>

                    <i ref={left1} className="left-arrow" onClick={sleepScroll}>
                        {leftArrow}
                    </i>

                    {cards.map((card, index) => (
                        <motion.div
                            onPan={sleepScroll}
                            key={index + "0"}
                            className="item"
                            initial="center"
                            animate={positions[positionIndex[index]]}
                            variants={variants}
                            transition={{ duration: 0.5 }}>
                            {card}
                        </motion.div>
                    ))}

                    <i className="right-arrow" onClick={sleepScroll}>
                        {rightArrow}
                    </i>
                </div>

                <div className="carousel">
                    <h3 className="freelancer-type">Developers</h3>

                    <i className="left-arrow" onClick={sleepScroll1}>
                        {leftArrow}
                    </i>

                    {cards1.map((card, index) => (
                        <motion.div
                            onPan={sleepScroll1}
                            key={index + "1"}
                            className="item"
                            initial="center"
                            animate={positions[positionIndex1[index]]}
                            variants={variants}
                            transition={{ duration: 0.5 }}>
                            {card}
                        </motion.div>
                    ))}

                    <i className="right-arrow" onClick={sleepScroll1}>
                        {rightArrow}
                    </i>
                </div>

                <div className="carousel">
                    <h3 className="freelancer-type">Translators</h3>

                    <i className="left-arrow" onClick={sleepScroll2}>
                        {leftArrow}
                    </i>

                    {cards2.map((card, index) => (
                        <motion.div
                            onPan={sleepScroll2}
                            key={index + "2"}
                            className="item"
                            initial="center"
                            animate={positions[positionIndex2[index]]}
                            variants={variants}
                            transition={{ duration: 0.5 }}>
                            {card}
                        </motion.div>
                    ))}

                    <i className="right-arrow" onClick={sleepScroll2}>
                        {rightArrow}
                    </i>
                </div>
            </div>
        </>
    );
}

export default Carousel;

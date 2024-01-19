import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import UserGenerator from "../UserGenerator/UserGenerator";
import FreelancerCard from "../FreelancerCard/FreelancerCard";

import "./Carousel.css";

const leftArrow = <FontAwesomeIcon icon={faCircleChevronLeft} size="3x" />;
const rightArrow = <FontAwesomeIcon icon={faCircleChevronRight} size="3x" />;

function Carousel() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const carousel = useRef();
    const innerCarousel = useRef();

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    useEffect(() => {
        setHeight(innerCarousel.current.scrollHeight - innerCarousel.current.offsetHeight);
    }, []);

    function left() {
        useEffect(() => {
            setScroll((carousel.current.scrollRight += 100));
        }, []);
    }

    function right() {
        console.log("right");
    }
    UserGenerator();

    return (
        <div className="carousel-parent">
            <i className="carousel-button" id="carousel-previous" onClick={left}>
                {leftArrow}
            </i>
            <motion.div ref={carousel} className="carousel-container">
                <motion.div ref={innerCarousel} drag="x" dragConstraints={{ right: 15, left: -width }} initial={{ x: 15 }} className="horizontal-carousel">
                    <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height - 15 }} className="vertical-carousel">
                        <FreelancerCard title="Designer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Designer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Designer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                    </motion.div>
                    <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height - 15 }} className="vertical-carousel">
                        <FreelancerCard title="Developer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Developer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Developer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                    </motion.div>
                    <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height - 15 }} className="vertical-carousel">
                        <FreelancerCard title="Photographer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Photographer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Photographer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                    </motion.div>
                    <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height - 15 }} className="vertical-carousel">
                        <FreelancerCard title="Translator" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Translator" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Translator" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                    </motion.div>
                    <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height - 15 }} className="vertical-carousel">
                        <FreelancerCard title="Writer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Writer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                        <FreelancerCard title="Writer" image="https://picsum.photos/250/200" text="Lorem ipsum is placeholder text commonly used in the graphic, print..." />
                    </motion.div>
                </motion.div>
            </motion.div>
            <i className="carousel-button" id="carousel-next" onClick={right}>
                {rightArrow}
            </i>
        </div>
    );
}

export default Carousel;

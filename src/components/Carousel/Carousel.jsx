import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import FreelancerCard from "../FreelancerCard/FreelancerCard";

import "./Carousel.css";

function Carousel() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const carousel = useRef();
    const innerCarousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    useEffect(() => {
        setHeight(innerCarousel.current.scrollHeight - innerCarousel.current.offsetHeight);
    }, []);

    return (
        <motion.div ref={carousel} className="carousel-container">
            <motion.div ref={innerCarousel} drag="x" dragConstraints={{ right: 150, left: -width }} initial={{ x: 150 }} className="horizontal-carousel">
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
    );
}

export default Carousel;

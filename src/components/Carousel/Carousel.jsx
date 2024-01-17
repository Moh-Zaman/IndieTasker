import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

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
            <motion.div ref={innerCarousel} drag="x" dragConstraints={{ right: 0, left: -width }} className="horizontal-carousel">
                <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height }} className="vertical-carousel">
                    <div className="example-card">
                        <h1>Example Title 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                </motion.div>
                <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height }} className="vertical-carousel">
                    <div className="example-card">
                        <h1>Example Title 2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                </motion.div>
                <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height }} className="vertical-carousel">
                    <div className="example-card">
                        <h1>Example Title 3</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                </motion.div>
                <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height }} className="vertical-carousel">
                    <div className="example-card">
                        <h1>Example Title 4</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                </motion.div>
                <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height }} className="vertical-carousel">
                    <div className="example-card">
                        <h1>Example Title 5</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                    <div className="example-card">
                        <h1>Example Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Carousel;

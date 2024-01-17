import { motion } from "framer-motion";

import "./Carousel.css";

function Carousel() {
    return (
        <motion.div className="carousel-container">
            <motion.div drag="x" dragConstraints={{ right: 0, left: -1000 }} initial={{ x: -500 }} className="horizontal-carousel">
                <motion.div drag="y" dragConstraints={{ bottom: 0, top: -600 }} className="vertical-carousel">
                    <div className="example-card">
                        <h1>Example Title</h1>
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
                <div className="example-card">
                    <h1>Example Title</h1>
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
                <div className="example-card">
                    <h1>Example Title</h1>
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
                <div className="example-card">
                    <h1>Example Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque dignissimos doloribus nihil fugit nobis!</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Carousel;

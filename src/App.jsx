import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
    return (
        <div>
            <Navbar className="navigation-container" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

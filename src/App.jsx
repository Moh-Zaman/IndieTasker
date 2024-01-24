import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profiles from "./pages/Profiles/Profiles";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search/Search";
import Gigs from "./pages/Gigs/Gigs";

import "./App.css";


function App() {
    return (
        <div>
            <Navbar className="navigation-container" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profiles />} />
                <Route path="/about" element={<About />} />
                <Route path="/gigs" element={<Gigs />} />
                <Route path="/tasker" element={<Search />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";


import "./App.css";

function App() {
    return (
        <div>
            <Navbar className="navigation-container"/>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;

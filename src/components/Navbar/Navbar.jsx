import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    return (
        <nav className="navigation">
            <h1 className="brand-name">IndieTasker</h1>
            <button className="hamburger" onClick={toggleNav}>
                {/* icon from Heroicons.com */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/tasker">All Taskers</a>
                    </li>
                    <li>
                        <a className="sign-up-button" href="/register">
                            Sign Up
                        </a>
                    </li>
                    <li>
                        <a className="log-in-button" href="/login">
                            Log In
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <span className="text">IndieTasker</span>
                </div>
                <div className="links">
                    {/* this needs work, not sure what we're linking yet */}
                    <span>About</span>
                    <span>Home</span>
                    <span>Freelancer?</span>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
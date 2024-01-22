import React from "react";
import FAQ from "../../components/FAQ/FAQ";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus vitae orci euismod fermentum at nec ex. Vestibulum maximus, urna vel ultrices dignissim, quam urna varius felis, eu convallis dolor purus ut justo. Sed eu libero non leo lacinia dignissim. Integer auctor sapien eu velit ultrices, et fermentum elit blandit.
        </p>
      </div>
      <FAQ />
    </div>
  );
}
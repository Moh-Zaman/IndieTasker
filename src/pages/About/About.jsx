import React from "react";
import FAQ from "../../components/FAQ/FAQ";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <div className="about-text">
        <p>Welcome to IndieTasker - Where Creativity Meets Opportunity!</p> <p>At IndieTasker, we believe in the power of individual talent and the endless possibilities that arise when freelancers come together with clients seeking exceptional services. Launched in [current year], IndieTasker has quickly become the go-to platform for connecting skilled freelancers with diverse project needs. Our journey began with a simple yet powerful vision: to empower freelancers worldwide while providing businesses with access to a vast pool of talented individuals.</p>
      </div>
      </div>
      <FAQ />
    </div>
  );
}
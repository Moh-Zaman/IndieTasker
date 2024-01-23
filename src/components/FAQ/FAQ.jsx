import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";

function FAQ() {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is IndieTasker, and how does it work?</Accordion.Header>
          <Accordion.Body>
          IndieTasker is an online platform connecting freelancers with clients seeking a wide range of services. Freelancers showcase their skills and expertise, while clients browse profiles to find the perfect match for their projects. The platform facilitates communication, project collaboration, and secure transactions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I get started as a freelancer on IndieTasker?</Accordion.Header>
          <Accordion.Body>
          To join IndieTasker as a freelancer, simply sign up for an account, create a comprehensive profile highlighting your skills and experience, and start browsing available projects. Be sure to set your rates, availability, and complete your profile to increase your visibility to potential clients.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Accordion Item #4</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;

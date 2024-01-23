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
          <Accordion.Header>How can clients find the right freelancer for their project?</Accordion.Header>
          <Accordion.Body>
          Clients can search for freelancers based on specific skills, expertise, and project requirements. Additionally, our advanced search filters help narrow down the options. Once a client finds a suitable freelancer, they can review the freelancer's profile, portfolio, and ratings before initiating contact to discuss the project further.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Is IndieTasker only for freelancers locally, or can remote work collaborate online?</Accordion.Header>
          <Accordion.Body>
          IndieTasker supports both remote and local collaborations. While we encourage local freelancers to support businesses within your community, freelancers can also work remotely with clients, from around the world.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>How are payments handled on IndieTasker?</Accordion.Header>
          <Accordion.Body>
          ndieTasker utilizes a secure payment system. Clients make payments through the platform, and funds are held in escrow until the freelancer completes the project to the client's satisfaction. This ensures a fair and transparent process for both parties.          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Is IndieTasker only for freelancers locally, or can remote work collaborate online?</Accordion.Header>
          <Accordion.Body>
          IndieTasker supports both remote and local collaborations. While we encourage local freelancers to support businesses within your community, freelancers can also work remotely with clients, from around the world.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Is IndieTasker only for freelancers locally, or can remote work collaborate online?</Accordion.Header>
          <Accordion.Body>
          IndieTasker supports both remote and local collaborations. While we encourage local freelancers to support businesses within your community, freelancers can also work remotely with clients, from around the world.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Is IndieTasker only for freelancers locally, or can remote work collaborate online?</Accordion.Header>
          <Accordion.Body>
          IndieTasker supports both remote and local collaborations. While we encourage local freelancers to support businesses within your community, freelancers can also work remotely with clients, from around the world.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;

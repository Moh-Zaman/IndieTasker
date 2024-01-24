import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "../../data/profile.json";
import "./FreelancerCard.css";
import { useNavigate } from "react-router-dom";

function FreelancerCard() {
  const [users, setUsers] = useState([]);
  const [apiCallCount, setApiCallCount] = useState(0);
  const [randomUser, setRandomUser] = useState(getRandomUserArr(info));

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (apiCallCount < 1) {
        try {
          const response = await axios.get("https://randomuser.me/api/?results=1");
          if (response.data.results) {
            setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
            setApiCallCount((prevCount) => prevCount + 1);
          } else {
            console.log("No results found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        console.log("Reached the limit of 1 API call");
      }
    };

    fetchData();
  }, [apiCallCount]);

  useEffect(() => {
    setRandomUser(getRandomUserArr(info));
  }, [users]);

  function getRandomUserArr(usersArr) {
    const ranIndex = Math.floor(Math.random() * 10);
    return usersArr[ranIndex];
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigate("/tasker");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="freelancer-card">
          <h3 className="freelancer-card-title">{user.name.first + " " + user.name.last}</h3>
          <img className="freelancer-card-image" src={user.picture.large} alt="" />
          <div className="freelancer-card-body">
            <p className="freelancer-card-text">{randomUser.jobTitle}</p>
            <button className="freelancer-card-button" onClick={handleButtonClick}>
              Hire Us
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FreelancerCard;

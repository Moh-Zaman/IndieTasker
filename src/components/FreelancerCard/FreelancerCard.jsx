import "./FreelancerCard.css";
import axios from "axios";
import { useEffect, useState } from "react";

function FreelancerCard() {

    const [Users, setUsers] = useState([]);
    useEffect(() => {
      axios.get("https://randomuser.me/api/?results=25").then((Response) => {
        if (Response.data) {
          console.log("Found User");
          setUsers(Response.data.results);
        } else {
          console.log("User not Found");
        }
      }).catch(error => console.log(error));
    }, []);

    const displaylist = Users.map((User, index) => {
      return (

        <div className="freelancer-card">
            <h3 key={index}className="freelancer-card-title">{User.name.first + " " + User.name.last}</h3>
            <img key={index} className="freelancer-card-image" src={User.picture.large}  alt="" />
            <div key={index} className="freelancer-card-body">
                <p key={index} className="freelancer-card-text">{User.email}</p>
                <button key={index} className="freelancer-card-button">Hire Me</button>
            </div>
        </div>

      )
    });
 

    return (
        <div>{displaylist}</div>        
    );
}

export default FreelancerCard;



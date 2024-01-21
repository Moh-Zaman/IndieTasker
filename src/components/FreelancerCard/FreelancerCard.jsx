import "./FreelancerCard.css";
import axios from "axios";
import { useEffect, useState } from "react";

function FreelancerCard() {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://randomuser.me/api/?results=1")
            .then((Response) => {
                if (Response.data) {
                    console.log("Found");
                    setUsers(Response.data.results);
                } else {
                    console.log("not found");
                }
            })
            .catch((error) => console.log(error));
    }, []);

    const displaylist = Users.map((User, index) => {
        return (
            <div key={index} className="freelancer-card">
                <h3 className="freelancer-card-title">{User.name.first + " " + User.name.last}</h3>
                <img className="freelancer-card-image" src={User.picture.large} alt="" />
                <div className="freelancer-card-body">
                    <p className="freelancer-card-text">{User.email}</p>
                    <button className="freelancer-card-button">Hire Me</button>
                </div>
            </div>
        );
    });

    return <div>{displaylist}</div>;
}

export default FreelancerCard;

import "./FreelancerCard.css";

function FreelancerCard(props) {
    return (
        <div className="freelancer-card">
            <h3 className="freelancer-card-title">{props.title}</h3>
            <img className="freelancer-card-image" src={props.image} alt="" />
            <div className="freelancer-card-body">
                <p className="freelancer-card-text">{props.text}</p>
                <button className="freelancer-card-button">Hire Me</button>
            </div>
        </div>
    );
}

export default FreelancerCard;

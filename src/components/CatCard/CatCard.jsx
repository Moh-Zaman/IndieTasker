import "./CatCard.css";
import { useNavigate } from "react-router-dom";

function CatCard(props) {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`/gigs?id=${props.id}`)
    }

    return (
        <div key={props.id} className="cat-card">
            <h3 className="cat-card-title">{props.title}</h3>
            <img className="cat-card-image" src={props.img} alt="" />
            <div className="cat-card-body">
                <p className="cat-card-text">{props.desc}</p>
                <button className="cat-card-button" onClick={handleSubmit}>Click Me</button>
            </div>
        </div>
    );
}

export default CatCard;

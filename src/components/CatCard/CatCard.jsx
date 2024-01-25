import "./CatCard.css";

function CatCard(props) {
    return (
        <div key={props.id} className="cat-card">
            <h3 className="cat-card-title">{props.title}</h3>
            <img className="cat-card-image" src={props.img} alt="" />
            <div className="cat-card-body">
                <p className="cat-card-text">{props.desc}</p>
                <button className="cat-card-button">Click Me</button>
            </div>
        </div>
    );
}

export default CatCard;

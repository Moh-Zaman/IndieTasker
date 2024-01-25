import "./CatCard.css";
import catArr from "../../data/catCardData.json";

function CatCard() {

  const displaylist = catArr.map((User, index) => {
      return (     
          <div key={index} className="cat-card">
              <h3 className="cat-card-title">{User.title}</h3>
              <img className="cat-card-image" src={User.img} alt="" />
              <div className="cat-card-body">
                  <p className="cat-card-text">{User.desc}</p>
                  <button className="cat-card-button">Click Me</button>
              </div>
          </div>
      );
  });

  return <div>{displaylist}</div>;
}

export default CatCard;
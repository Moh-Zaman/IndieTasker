import "./CatCard.css";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import catArr from "../../data/catCardData.json";

function CatCard() {
  console.log(catArr);

  return (
    <div className="cat-card-wrapper">
      <h1 className="cat-card-section-title">Featured Categories</h1>
      <div className="cat-card-container">
        <MDBCarousel showIndicators showControls fade>
          {catArr.map((item) => (
            <MDBCarouselItem key={item.id} itemId={item.id}>
              <img src={item.img} className="d-block w-100" alt="..." />
              <MDBCarouselCaption>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          ))}
        </MDBCarousel>
      </div>
    </div>
  );
}

export default CatCard;

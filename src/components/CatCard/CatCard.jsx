import "./CatCard.css";
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

import catArr from "../../data/catCardData.json"

function CatCard() {

   console.log(catArr)



   return(
    <MDBCarousel showIndicators showControls fade>
      {catArr.map((item) => (
        <MDBCarouselItem itemId={item.id}>
            <img src={item.img} className='d-block w-100' alt='...' />
            <MDBCarouselCaption>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
            </MDBCarouselCaption>
        </MDBCarouselItem>
      ))}
    </MDBCarousel>    
   )
}

export default CatCard;

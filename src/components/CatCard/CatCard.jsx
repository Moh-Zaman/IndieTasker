import axios from "axios";
import { useEffect, useState } from "react";
import "./CatCard.css";

function CatCard() {
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
          <div key={index} className="cat-card">
              <h3 className="cat-card-title">{User.name.first + " " + User.name.last}</h3>
              <img className="cat-card-image" src={User.picture.large} alt="" />
              <div className="cat-card-body">
                  <p className="cat-card-text">{User.email}</p>
                  <button className="cat-card-button">Hire Me</button>
              </div>
          </div>
      );
  });

  return <div>{displaylist}</div>;
}

export default CatCard;

// import catArr from "../../data/catCardData.json";

// function CatCard() {
//   console.log(catArr);

//   return (
//     <div className="cat-card-wrapper">
//       <h1 className="cat-card-section-title">Featured Categories</h1>
//       <div className="cat-card-container">
//         <MDBCarousel showIndicators showControls fade>
//           {catArr.map((item) => (
//             <MDBCarouselItem key={item.id} itemId={item.id}>
//               <img src={item.img} alt="..." />
//               <MDBCarouselCaption>
//                 <h5>{item.title}</h5>
//                 <p>{item.desc}</p>
//               </MDBCarouselCaption>
//             </MDBCarouselItem>
//           ))}
//         </MDBCarousel>
//       </div>
//     </div>
//   );
// }
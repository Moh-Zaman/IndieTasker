import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';

import users from "../../data/profile.json";
import gigImages from "../../data/gigImages.json";
import "./GigCard.css";

function GigCard() {
  const location = useLocation();
  const searchValue = new URLSearchParams(location.search).get('id');
  const filteredUsers = users.filter(user => user.id == searchValue);

  const [randomImage, setRandomImage] = useState("");
  const [randomImage2, setRandomImage2] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gigImages.length);
    setRandomImage(gigImages[randomIndex].img);
  }, []);

  useEffect(() => {
    const randomIndex2 = Math.floor(Math.random() * gigImages.length);
    setRandomImage2(gigImages[randomIndex2].img);
  }, []);

  return (
    <div className='gig-container-card'>
      <MDBCard className='gig-card-card'>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={randomImage + ".jpeg"} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{filteredUsers[0].project1}</MDBCardTitle>
          <MDBCardText>
            Here is one of the projects from this tasker. Click below to hire them!
          </MDBCardText>
          <MDBBtn href={`/profile?id=${filteredUsers[0].id}`}>Go to my profile</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className='gig-card-card'>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={randomImage2 + ".jpeg"} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{filteredUsers[0].project2}</MDBCardTitle>
          <MDBCardText>
            Here is one of the projects from this tasker. Click below to hire them!
          </MDBCardText>
          <MDBBtn href={`/profile?id=${filteredUsers[0].id}`}>Go to my profile</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default GigCard;

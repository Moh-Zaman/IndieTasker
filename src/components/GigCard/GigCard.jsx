import React from 'react';
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

import users from "../../data/profile.json"

function GigCard() {
  const location = useLocation();

  const searchValue = new URLSearchParams(location.search).get('id')

  let filteredUsers = users.filter(user => user.id == `${searchValue}`)

  console.log(filteredUsers)

  return (
    <div>
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{filteredUsers[0].project1}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href={`/profile?id=${filteredUsers[0].id}`}>Go to my profile</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{filteredUsers[0].project2}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href={`/profile?id=${filteredUsers[0].id}`}>Go to my profile</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>    
  );
}

export default GigCard;
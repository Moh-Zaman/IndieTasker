import React, { useEffect } from 'react'
import users from "../../data/profile.json"
import "./FreelanceSearch.css"
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';

function FreelanceSearch() {

    const location = useLocation();
    const searchValue = new URLSearchParams(location.search).get('search')
    const countryValue = new URLSearchParams(location.search).get('country')
    const jobValue = new URLSearchParams(location.search).get('job')

    let filteredUsers = users

    if (countryValue !== null) {
        filteredUsers = users.filter(user => user.country == `${countryValue}`)
    } else if (jobValue !== null) {
        filteredUsers = users.filter(user => user.jobTitle == `${jobValue}`)
    }
    
  return (
    <div className="search-container" style={{ backgroundColor: '#eee' }}>
    <MDBContainer className="container py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        {filteredUsers.map((item) => (
            <MDBCol md="12" xl="4">
                <MDBCard style={{ borderRadius: '15px' }}>
                    <MDBCardBody key={item.id} className="text-center search-cardBody">
                    <div className="mt-3 mb-4">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle" fluid style={{ width: '100px' }} />
                    </div>
                    <MDBTypography tag="h4">{item.name.first + " " + item.name.last}</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                    {item.jobTitle} <a href={"https://" + item.website}><span className="mx-2">|</span> {item.website}</a>
                    </MDBCardText>
                    <div className="mb-4 pb-2">
                    <MDBBtn outline floating>
                        <a href={"https://github.com/" + item.github}><MDBIcon fab icon="github" size="lg"/></a>
                    </MDBBtn>
                    <MDBBtn outline floating className="mx-1">
                        <a href={"https://www.instagram.com/" + item.instagram}><MDBIcon fab icon="instagram" size="lg" /></a>
                    </MDBBtn>
                    <MDBBtn outline floating>
                        <a href={"https://twitter.com/" + item.twitter}><MDBIcon fab icon="twitter" size="lg" /></a>
                    </MDBBtn>
                    </div>
                    <MDBBtn rounded size="lg">
                    Hire Tasker
                    </MDBBtn>
                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    <div>
                        <MDBCardText className="mb-1 h5">{item.phoneNum}</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Phone Number</MDBCardText>
                    </div>
                    <div className="px-3">
                        <MDBCardText className="mb-1 h5">{item.country}</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">Country</MDBCardText>
                    </div>
                    </div>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  </div>
  )
}

export default FreelanceSearch

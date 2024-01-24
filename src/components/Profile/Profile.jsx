import axios from "axios";
import "./Profile.css";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
} from "mdb-react-ui-kit";

import users from "../../data/profile.json";

// For Maps
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useEffect } from "react";

function Profile() {
    // Function to get cookie name (for logged in user)
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    // Return profile data based on cookie name
    useEffect(() => {
        const cookie = { user_key: getCookie("user_key") };
        axios.post("http://localhost:3001/getUser", cookie).then((res) => {
            console.log(res.data[0]);
        });
    }, []);

    function getRandomUserArr(usersArr) {
        const ranIndex = Math.floor(Math.random() * users.length);

        return usersArr[ranIndex];
    }

    const randomUser = getRandomUserArr(users);

    const randomUserLat = parseInt(randomUser.latitude);
    const randomUserLng = parseInt(randomUser.longitude);

    console.log(randomUserLat, randomUserLng);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBLe7vdeUj-k2dbU8NU_YW4Kq0xwN93J3w",
    });

    const center = useMemo(() => ({ lat: randomUserLat, lng: randomUserLng }), []);

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <a href="/">Home</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>My Profile</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: "150px" }}
                                    fluid
                                />
                                <p className="text-muted mb-1">{randomUser.jobTitle}</p>
                                <p className="text-muted mb-4">{randomUser.country}</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn>Follow</MDBBtn>
                                    <MDBBtn outline className="ms-1">
                                        Message
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fas icon="globe fa-lg text-warning" />
                                        <MDBCardText>{randomUser.website}</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="github fa-lg" style={{ color: "#333333" }} />
                                        <MDBCardText>{randomUser.github}</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="twitter fa-lg" style={{ color: "#55acee" }} />
                                        <MDBCardText>{randomUser.twitter}</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="instagram fa-lg" style={{ color: "#ac2bac" }} />
                                        <MDBCardText>{randomUser.instagram}</MDBCardText>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{randomUser.name.first + " " + randomUser.name.last}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{randomUser.email}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{randomUser.phoneNum}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Country</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{randomUser.country}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4">
                                            <span className="text-primary font-italic me-1">{randomUser.project1}</span>
                                        </MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: ".77rem" }}>
                                            Web Design
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Website Markup
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            One Page
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Mobile Template
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Backend API
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4">
                                            <span className="text-primary font-italic me-1">{randomUser.project2}</span>
                                        </MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: ".77rem" }}>
                                            Web Design
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Website Markup
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            One Page
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Mobile Template
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Backend API
                                        </MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <div className="googleMaps">
                        {!isLoaded ? (
                            <h1>Loading...</h1>
                        ) : (
                            <GoogleMap mapContainerClassName="maps-container" center={center} zoom={10}>
                                <Marker position={center} />
                            </GoogleMap>
                        )}
                    </div>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default Profile;

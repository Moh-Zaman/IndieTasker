import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./Footer.css";

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        {/* SOCIAL MEDIA ICONS & LINKS */}
        <div className='social-media-icons'>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

       {/* TEXT AREA in footer */} 
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                IndieTasker
              </h6>
              <p>
                Small block of text about IndieTasker or these links!
              </p>
            </MDBCol>

        {/* POPULAR CATEGORIES - links in this section lead to nothing rn*/}
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Popular Categories</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Web Developer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Plumber
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Builder
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Detective
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Karate Instructor
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  More...
                </a>
              </p>
            </MDBCol>

        {/* USEFUL LINKS - links in this section lead to nothing rn */}
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Freelancer?
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

        {/* CONTACT INFORMATION */}
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Random Address here
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@IndieTasker.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> 000 000 000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

        {/* COPYRIGHT INFORMATION */}
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: 
        <a className='text-reset fw-bold' href='https://github.com/Moh-Zaman/IndieTasker'>
           IndieTasker
           {/* potentially use this as a link to our githubs, currently links back to bootstrap */}
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
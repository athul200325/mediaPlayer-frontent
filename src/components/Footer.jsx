import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
            <MDBFooter className='bg-dark  text-white text-center text-md-start'>
      <MDBContainer className='p-4 py-5'>
        <MDBRow>
          <MDBCol style={{textAlign:'justify',width:'400px'}} lg="6" md="12" className='mb-4 me-5 mb-md-0'>
            <h5 className='text-uppercase mb-3'>Music Player</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg="2" md="6" className='mb-4 mb-md-0 ms-2 me-3'>
            <h5 className='text-uppercase mb-3'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <Link style={{textDecoration:'none'}} to={'/'}>
                  <a style={{textDecoration:'none'}} href='#!' className='text-white'>
                     Landing Page
                  </a>
                </Link>
              </li>
              <Link style={{textDecoration:'none'}} to={'/home'}>
              <li>
                <a style={{textDecoration:'none'}} href='#!' className='text-white'>
                   Home Page
                </a>
              </li>
              </Link>
              <Link style={{textDecoration:'none'}} to={'/history'}>
              <li>
                <a style={{textDecoration:'none'}} href='#!' className='text-white'>
                   Watch History Page
                </a>
              </li>
              </Link>

            </ul>
          </MDBCol>

          <MDBCol lg="2" md="6" className='mb-4 mb-md-0 me-3'>
            <h5 className='text-uppercase mb-3 mb-3'>Guides</h5>

            <ul className='list-unstyled'>
              <li>
                <a style={{textDecoration:'none'}} href='#!' className='text-white'>
                  React
                </a>
              </li>
              <li>
                <a style={{textDecoration:'none'}} href='#!' className='text-white'>
                  React Bootstrap
                </a>
              </li>
              <li>
                <a style={{textDecoration:'none'}} href='#!' className='text-white'>
                  React Router
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="6" className='mb-4 mb-md-0 me-3'>
            <h5 className='text-uppercase mb-3 mb-3'>Contact Us</h5>
            <div style={{display:'flex',alignItems:'center'}}>
              <Form.Control type="email" className='my-3 me-3' placeholder="Enter email" />
              <i style={{backgroundColor:'rgb(0, 164, 230)',padding:'10px',borderRadius:'10px'}} class="fa-solid fa-arrow-right"></i>
            </div>
            <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a>
        </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a style={{textDecoration:'none'}} className='text-white' href='https://mdbootstrap.com/'>
          MediaPlayer.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer

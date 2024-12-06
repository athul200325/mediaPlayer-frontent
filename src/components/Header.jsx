import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Navbar style={{zIndex:1}} className="bg-info position-fixed w-100 ">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}} to={'/'}>
              <i className='fa-solid fa-music me-2'></i>
              {' '}
              Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
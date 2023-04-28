import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch((error)=>console.error(error))
  }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link to="/">News Area</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <>
            {
              user?.uid ? 
              <>
                <span className='text-white pt-2'>{user?.displayName}</span>
                <Button variant='outline-info' className='ms-2' onClick={handleLogOut}>Log Out</Button>
              </>
              :
              <>
              <Link to='/login'><Button variant='outline-info' className='ms-2'>Log In</Button></Link>
              <Link to='/register'><Button variant='outline-info' className='ms-2'>Register</Button></Link>
              </>


            }

            </>
            <Link to="/profile">
             {
              user?.photoURL?
              <Image style={{height: "30px",width :"30px"}} roundedCircle src={user?.photoURL
              }></Image>
              :
              <FaUser></FaUser>
             }
            </Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    );
};

export default Header;
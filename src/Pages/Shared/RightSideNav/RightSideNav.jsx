import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp} from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const {providerLogIn} =useContext(AuthContext);
    const googleProvider =new GoogleAuthProvider();
    const handleGoogleSignIn =()=>{
        providerLogIn(googleProvider)
        .then(result =>{
        })
        .catch(
            error=>console.error(error)
        )
    }
    return (
        <div>
            <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
      <Button variant='outline-dark'><FaGithub></FaGithub> Login With Github</Button>

    </ButtonGroup>
    <div className='mt-4'>
        <h5>Find Us on</h5>
        <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook/> FaceBook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp/> What'sApp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
      
    </ListGroup>
    </div>
    <div>

    </div>
    <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;
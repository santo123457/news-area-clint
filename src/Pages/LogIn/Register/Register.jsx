import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser,updateUserProfile, verifyEmail } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    // this will send email and password to firebase with context hook;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        handleUpdateUserProfile(name,photoURL);
        handleEmailVerification();
        toast.success('please verify your email address')
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

const handleUpdateUserProfile =(name,photoURL)=>{
  const profile ={
    displayName : name,
    photoURL : photoURL
  }
  updateUserProfile(profile)
  .then(()=>{})
  .catch(error => console.error(error))
}

const handleEmailVerification =()=>{
  verifyEmail()
  .then(()=>{})
  .catch(error => console.error(error))
}
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter Your PhotoURL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlid = "formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            controlid="formBasicCheckbox"
            label={
              <>
                Accept <Link to="/terms">terms and conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Form.Text className="text-danger d-block mb-3">{error}</Form.Text>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;

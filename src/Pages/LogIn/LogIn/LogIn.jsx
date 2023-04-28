import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LogIn = () => {

  const [error, setError] = useState("");
  const { signIn,setLoading } = useContext(AuthContext);

  // to redirect to another page after authentication;
  const navigate = useNavigate();
  const  location  = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
            navigate( from, {replace : true});
        }
        else{
            toast.error('Please Verify Your Email First.')
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(()=>{
        setLoading(false);
      })
  };
  return (
    <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Text className="text-danger d-block mb-3">{error}</Form.Text>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LogIn;

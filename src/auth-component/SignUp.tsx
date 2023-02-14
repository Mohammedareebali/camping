import React, { useState } from 'react';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

interface Props{
    setToken:any;
}

const SignUp: React.FC<Props> = ({setToken}) => {
  // Define state variables for the email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        // Send a POST request to the server to create a new user
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password,password2}),
        });
  
        if (!response.ok) {
            throw new Error(response.statusText);
          }
          setToken(response);
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <FormControl
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <FormControl
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <FormControl
            type="password"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          />
        </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;

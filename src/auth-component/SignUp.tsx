import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { Form, FormControl, Button,Alert, Row, Col,Card } from 'react-bootstrap';
const img = require('../pics/icon-small.png');
const authorImg = require('../pics/a.png');

interface Props {
  setToken: (token: string) => void;
}

const SignUp: React.FC<Props> = ({setToken}) => {
  // Define state variables for the email and password
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const backendUrl = 'https://yelcamp-backend.herokuapp.com';
const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        // Send a POST request to the server to create a new user
        const response = await fetch(`${backendUrl}/api/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password,password2}),
        });
  
        if (response.ok) {
          const data = await response.json();
          setToken(data.token);
          navigate('/home')
        } else {
          const errorData = await response.json();
          setError('Incorrect email or password');
        }
        
            } catch (err) {
              setError('Incorrect email or password');
            console.log(err)
            }
          };

  return (
    <div className="containers">
      <section className="login-form">
        <div className='logo-text'>
         <p><b> <img src={img} alt = 'this'></img>yelpCamp</b></p>
         <Link to="/main">
         <p className='back'><i className="fas fa-arrow-left"></i> Back</p>
          </Link> 
          </div>
        <div className="forms">
        <h2><b>Start exploring camps from all over around the world</b></h2>
        <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
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
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <p>Already have an account? <Link to="/login">Login</Link></p>
     </div>
      </section>
     
      <div>
      
    </div>
    <section className="testimonial">
        <h3>"YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added"</h3>
       
        <Card>
      <Row>
        <Col md={2}>
          <div className="imag">
            <img className='img' src={authorImg} alt='that'></img>
          </div>
        </Col>
        <Col md={10}>
          <div className='column'>
            <p className="name"><b>Mohammed Areeb Ali</b></p>
            <p className='profession'>Professional hiker</p>
          </div>
        </Col>
      </Row>
    </Card>
      </section>
</div>    
  );
};

export default SignUp;

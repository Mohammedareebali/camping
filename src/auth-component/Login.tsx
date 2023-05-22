import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { Form, Button, Alert,Card,Row,Col } from 'react-bootstrap';
import '../auth-css/login.css';
const img = require('../pics/icon-small.png');
const authorImg = require('../pics/a.png');
interface Props {
  setToken: (token: string) => void;
}

const Login: React.FC<Props> = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
const backendUrl = 'https://yelcamp-backend.herokuapp.com';
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/login`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ email, password })
});

if (response.ok) {
  const data = await response.json();
  setToken(data.token);
  navigate('/search');
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
    <>
   <div className="containers">
      <section className="login-form">
        <div className='logo-text'>
         <p><b> <img src={img} alt = 'this'></img>yelpCamp</b></p>
         <Link to="/">
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
      <Button  type="submit">
        Login
      </Button>
    </Form>
    <p>Not a user yet? <Link to="/signup">Create an account</Link></p>
     </div>
      </section>
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
    </>

  );
};

export default Login;

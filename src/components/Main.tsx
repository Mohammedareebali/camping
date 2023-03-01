import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { Button, Alert,Card,Row,Col } from 'react-bootstrap';
const img = require('../pics/icon-small.png');
const camp = require('../pics/camp.png');
export default function Main() {
  return (
    <div className="containers">
    <section className="login-form">
      <div className='logo-text'>
       <p><b> <img src={img} alt = 'this'></img>yelpCamp</b></p>
       
        </div>
      <div className="forms">
      <h2><b>Explore the best camps on Earth.</b></h2>
      <p>YelpCamp is a curated list of the best camping spots on Earth. unfiltered and unbiased reviews.</p>
<div className='list'>
  <ul>
  <li>Add your own camp suggestions.</li>
  <li>Leave reviews and experineces</li>
  <li>See locations for all camps</li>
  </ul></div>   
  <div className='view'>
  <Button variant="primary" type="submit">
        View Campgrounds
      </Button>
      </div> 
      <div className="partners">
        <p><b>Partnered with:</b></p>
        <div className='partner-logo'>
          </div>
          </div>  
  <p>Not a user yet? <Link to="/signup">Create an account</Link></p>
   </div>
    </section>
    <section className="testimonial campImg">
     
      
    </section>
  </div>
  )
}

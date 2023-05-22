import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const img = require('../pics/icon-small.png');
const campimage = require('../pics/heroimage.jpg');
const campimageT = require('../pics/heroiamgeT.jpg')
const checkmark = require('../pics/checkmark.svg').default;
const booking = require('../pics/Booking.svg').default;
const airbnb = require('../pics/Airbnb.svg').default;
const plumguide = require('../pics/Plumguide.svg').default;

export default function Main() {
  return (
    
    <div className="containers mainContainer">
      
      <section className="login-form mainlogin">
        <div className='logo-text mainlogo'>
          <p><b> <img src={img} alt='YelpCamp logo' />yelpCamp</b></p>
        </div>
        
        <div className="forms mainform">
          <h1><b>Explore the best camps on Earth.</b></h1>
          <p>YelpCamp is a curated list of the best camping spots on Earth. unfiltered and unbiased reviews.</p>
          
          <div className='list'>
            <ul>
              <li><img src={checkmark} alt='checkmark' />Add your own camp suggestions.</li>
              <li><img src={checkmark} alt='checkmark' />Leave reviews and experiences</li>
              <li><img src={checkmark} alt='checkmark' />See locations for all camps</li>
            </ul>
          </div>   
          
          <div className='view'>
            <Button variant='dark' className='color' >
              <Link to='/search'>
              View Campgrounds
              </Link>
            </Button>
          </div> 
          
          <div className="partners">
            <p><b>Partnered with:</b></p>
            <div className='partner-logo'>
              <img src={booking} alt='booking' />
              <img src={airbnb} alt='airbnb' />
              <img src={plumguide} alt='plumguide' />
            </div>
          </div>  
        </div>
      </section>
      
      <section className="testimonial ">
      <img src={campimageT} alt = 'this' className='imgt'></img>
      <img src={campimage} alt = 'this' className='imgd'></img>
      </section>
      
      <section className='logo-text n'>
        <p><b> <img src={img} alt='YelpCamp logo' />yelpCamp</b></p>
      </section>
      
    </div>
  )
}

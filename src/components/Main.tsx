<<<<<<< HEAD
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const img = require('../pics/icon-small.png');
const campimage = require('../pics/heroimage.jpg');
const campimageT = require('../pics/heroiamgeT.jpg');
const checkmark = require('../pics/checkmark.svg').default;
const booking = require('../pics/Booking.svg').default;
const airbnb = require('../pics/Airbnb.svg').default;
const plumguide = require('../pics/Plumguide.svg').default;

const Main = () => {
  return (
    <div className="main-container">
      <section className="intro-section">
        <div className='logo-container'>
          <p><b><img src={img} alt='YelpCamp logo' className='logo-image'/>yelpCamp</b></p>
        </div>
        <div className="intro-text-container">
          <h1 className='intro-title'><b>Explore the best camps on Earth.</b></h1>
          <p className='intro-description'>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
          <div className='features-container'>
            <ul className='features-list'>
              <li className='feature-item'><img src={checkmark} alt='checkmark' className='checkmark-image'/>Add your own camp suggestions.</li>
              <li className='feature-item'><img src={checkmark} alt='checkmark' className='checkmark-image'/>Leave reviews and experiences</li>
              <li className='feature-item'><img src={checkmark} alt='checkmark' className='checkmark-image'/>See locations for all camps</li>
            </ul>
          </div>   
          <div className='button-container'>
            <Button variant='dark' className='view-button'>
              <Link to='/search' className='button-link'>
              View Campgrounds
              </Link>
            </Button>
          </div> 
          <div className="partners-container">
            <p className='partners-title'><b>Partnered with:</b></p>
            <div className='partner-logos-container'>
              <img src={booking} alt='booking' className='partner-logo'/>
              <img src={airbnb} alt='airbnb' className='partner-logo'/>
              <img src={plumguide} alt='plumguide' className='partner-logo'/>
            </div>
          </div>  
        </div>
      </section>
      <section className="images-section">
        <img src={campimageT} alt = 'Campsite' className='camp-image-top'/>
        <img src={campimage} alt = 'Campsite' className='camp-image-bottom'/>
      </section>
      <section className='logo-section2'>
        <p><b><img src={img} alt='YelpCamp logo' className='logo-image'/>yelpCamp</b></p>
      </section>
    </div>
  );
};

export default Main;
=======
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const img = require('../pics/icon-small.png');
const campimage = require('../pics/heroimage.jpg');
const campimageT = require('../pics/heroiamgeT.jpg');
const checkmark = require('../pics/checkmark.svg').default;
const booking = require('../pics/Booking.svg').default;
const airbnb = require('../pics/Airbnb.svg').default;
const plumguide = require('../pics/Plumguide.svg').default;

const Main = () => {
  return (
    <div className="main-container">
      <section className="intro-section">
        <div className='logo-container'>
          <p><b><img src={img} alt='YelpCamp logo' className='logo-image'/>yelpCamp</b></p>
        </div>
        <div className="intro-text-container">
          <h1 className='intro-title'><b>Explore the best camps on Earth.</b></h1>
          <p className='intro-description'>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
          <div className='features-container'>
            <ul className='features-list'>
              <li className='feature-item'><img src={checkmark} alt='checkmark' className='checkmark-image'/>Add your own camp suggestions.</li>
              <li className='feature-item'><img src={checkmark} alt='checkmark' className='checkmark-image'/>Leave reviews and experiences</li>
              <li className='feature-item'><img src={checkmark} alt='checkmark' className='checkmark-image'/>See locations for all camps</li>
            </ul>
          </div>   
          <div className='button-container'>
            <Button variant='dark' className='view-button'>
              <Link to='/search' className='button-link'>
              View Campgrounds
              </Link>
            </Button>
          </div> 
          <div className="partners-container">
            <p className='partners-title'><b>Partnered with:</b></p>
            <div className='partner-logos-container'>
              <img src={booking} alt='booking' className='partner-logo'/>
              <img src={airbnb} alt='airbnb' className='partner-logo'/>
              <img src={plumguide} alt='plumguide' className='partner-logo'/>
            </div>
          </div>  
        </div>
      </section>
      <section className="images-section">
        <img src={campimageT} alt = 'Campsite' className='camp-image-top'/>
        <img src={campimage} alt = 'Campsite' className='camp-image-bottom'/>
      </section>
      <section className='logo-section2'>
        <p><b><img src={img} alt='YelpCamp logo' className='logo-image'/>yelpCamp</b></p>
      </section>
    </div>
  );
};

export default Main;
>>>>>>> 1ebec6a (fix:setup with backend)

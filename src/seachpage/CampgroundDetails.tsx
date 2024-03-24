import React, { useEffect, useState } from "react";
import {  useNavigate, useParams,Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ReviewPopup from "./ReviewPopup.js";
import ReviewDisplay from './ReviewDisplay.js';
import NavComponent from "components/Nav.js";


interface Props{
  token : string | null
}
interface Campground {
  coordinates: [number, number];
  _id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  __v: number;
  price: number;
  bed: number;
  wifi: boolean;
  reviews: number;
}

const CampgroundDetails: React.FC<Props> = ({token}) => {
  const { campgroundId } = useParams();
  const selectedCampgroundId = campgroundId;
  const [loggedIn, setLoggedIn] = useState<boolean>(localStorage.getItem('isAuthenticated') === 'true');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [campground, setCampground] = useState<Campground | null>(null);
  // Add new state for reviews
const [reviews, setReviews] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
  });
  const [showReviewPopup, setShowReviewPopup] = useState(false); // Add this state
  const navigate = useNavigate();
  // CampgroundDetails.tsx
  const backendUrl = 'http://localhost:5001';
const handleSaveReview = async (review: string, emojiRating: number) => {
  try {
    
    const response = await fetch(`${backendUrl}/api/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        
      },
      body: JSON.stringify({
        emojiRating,
        comment: review,
        campgroundId: selectedCampgroundId,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to save review');
    }

    const data = await response.json();
    console.log('Review saved:', data);
    setShowReviewPopup(false);
  } catch (error) {
    console.error(error);
   navigate('/login')
    alert('Failed to save review');
  }
};



  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch campground details
        const response = await fetch(`${backendUrl}/api/campgrounds/${selectedCampgroundId}`);
        const data = await response.json();
        setCampground(data);
        setLoading(false);
        setViewport({
          latitude: data.coordinates[1],
          longitude: data.coordinates[0],
          zoom: 10,
        });
        // Fetch reviews
      const reviewsResponse = await fetch(`${backendUrl}/api/campgrounds/${selectedCampgroundId}/reviews`);
      const reviewsData = await reviewsResponse.json();
      setReviews(reviewsData);

      } catch (error) {
        console.error(error);

        setError("Failed to fetch campground details");
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading || !campground) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <NavComponent loggedIn={loggedIn} /> {/* Add Nav component */}
      <Container className="contain">
        <Row>
          <Col>
            <Link to="/search" >
            <p className='back'><i className="fas fa-arrow-left"></i> Back to search results</p>
            </Link>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Card key={campground._id}>
              <Card.Img variant="top" src={campground.imageUrl} />
            </Card>
          </Col>
        </Row>
        <Row>
        <Col>
            <h1>{campground.name}</h1>
          </Col>
        </Row>
        <Row className="description">
          <Col md={6}>
            <h2>Description</h2>
            <p>{campground.description}</p>
          </Col>
          <Col md={6}>
            <h2>Location</h2>
            <div style={{ width: "100%", height: "400px" }}>
            <Map
              {...viewport}
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              onMove={(evt) => setViewport(evt.viewState)}
              mapboxAccessToken={
                "pk.eyJ1IjoibW9oYW1tZWQtYXJlZWIiLCJhIjoiY2t6ZDdpcG1rMDQyODJwcGMwOGZvZDVveCJ9.VtXqwPfArJoSqOLzFAfu1g" ||
                ""
              }
            >
              {campground.coordinates ? (
                <Marker
                  latitude={campground.coordinates[1]}
                  longitude={campground.coordinates[0]}
                />
              ) : null}
            </Map>
            </div>
            <h2>Price per night</h2>
            <p>${campground.price}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="reviewheading">Reviews</h2>
            <ReviewDisplay reviews={reviews} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => setShowReviewPopup(true)}>Add Review</Button>
            <ReviewPopup
              show={showReviewPopup}
              handleClose={() => setShowReviewPopup(false)}
              handleSave={handleSaveReview}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default CampgroundDetails;
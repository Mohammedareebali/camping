import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ReviewPopup from "./ReviewPopup";
import ReviewDisplay from './ReviewDisplay';


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

const handleSaveReview = async (review: string, emojiRating: number) => {
  try {
    
    const response = await fetch('/review', {
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
        const response = await fetch(`/campgrounds/${selectedCampgroundId}`);
        const data = await response.json();
        setCampground(data);
        setLoading(false);
        setViewport({
          latitude: data.coordinates[1],
          longitude: data.coordinates[0],
          zoom: 10,
        });
        // Fetch reviews
      const reviewsResponse = await fetch(`/campgrounds/${selectedCampgroundId}/reviews`);
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
    <Container>
      <Row>
        <Col>
        <h1>{campground.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card key={campground._id}>
            <Card.Img variant="top" src={campground.imageUrl} />
          </Card>
        </Col>
      </Row>
      <Row className="secondrow">
       
        <Col md={6}>
          <Card>
            <Card.Body>
              
              <Card.Text>{campground.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
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
        </Col>
      </Row>
      <Row>
        <Col><ReviewDisplay reviews={reviews} /></Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => setShowReviewPopup(true)}>Add Review</Button>
          <ReviewPopup
            show={showReviewPopup}
            handleClose={() => setShowReviewPopup(false)}
            handleSave={handleSaveReview}
            
          />
          {/* Display reviews here */}
        </Col>
      </Row>
    </Container>
  );
};

export default CampgroundDetails;

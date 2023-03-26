import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Card, Container } from "react-bootstrap";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import OpenCageGeocoder from 'opencage-api-client';

interface Campground {
  _id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  __v: number;
}



const CampgroundDetails: React.FC = () => {
  const { campgroundId } = useParams();
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const selectedCampgroundId = campgroundId;
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [campground, setCampground] = useState<Campground | null>(null);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/campgrounds/${selectedCampgroundId}`);
        const data = await response.json();
        setCampground(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch campground details");
      }
    };
    fetchData();
    
  }, [ selectedCampgroundId]);
  useEffect(() =>{
    const geocodeAddress = async () => {
      if (campground && campground.location) {
        console.log(campground.location)
        try {
          const response = await OpenCageGeocoder.geocode({
            q: campground.location,
            key:'d1bccab3f5cc481d98a31418e2029d28'
          });
          if (response.results.length > 0) {
            const { lat, lng } = response.results[0].geometry;
            console.log(coordinates)
            setViewport({
              latitude: coordinates ? coordinates[0] : lat,
              longitude: coordinates ? coordinates[1] : lng,
              zoom: 10,
            });
            setCoordinates([lat, lng]);
          }
        } catch (error) {
          console.error(error);
          setError("Failed to geocode campground location");
        }
      }
    };
  
    geocodeAddress();
  },[campground])

  if (error) {
    return <p>{error}</p>;
  }

  if (loading || !campground) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
  <div className="row">
    <div className="col-md-6">
    
      <Card>
        <Card.Body>
          
          <div style={{ width: "100%", height: "400px" }}>
            <Map
              {...viewport}
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              onMove={evt => setViewport(evt.viewState)}
              mapboxAccessToken={'pk.eyJ1IjoibW9oYW1tZWQtYXJlZWIiLCJhIjoiY2t6ZDdpcG1rMDQyODJwcGMwOGZvZDVveCJ9.VtXqwPfArJoSqOLzFAfu1g' || ""}
            >
              {coordinates ? <Marker latitude={coordinates[0]} longitude={coordinates[1]} /> : null}
            </Map>
          </div>
        </Card.Body>
      </Card>
    </div>
    <div className="col-md-6">
    <Card key={campground._id}>
              <Card.Img variant="top" src={campground.imageUrl} />
              <Card.Body>
                <Card.Title>{campground.name}</Card.Title>
                <Card.Text>{campground.description}</Card.Text>
              </Card.Body>
            </Card>
    </div>
  </div>
</Container>

  );
};

export default CampgroundDetails;

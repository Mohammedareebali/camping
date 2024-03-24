<<<<<<< HEAD
import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaHouseUser, FaWifi } from "react-icons/fa";

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

interface SearchResultProps {
  campgrounds: any[];
}

const SearchResult: React.FC<SearchResultProps> = ({ campgrounds }) => {
  const history = useNavigate();
  const result = campgrounds;
  console.log(result);
  const handleViewCampground = (campgroundId: string) => {
    history(`/campgrounds/${campgroundId}`);
  };

  return (
    <Container className="scroll">
      <div className="cards-container">
        {result.map((campground, index) => (
          <div
            className="card"
            key={`campground-${campground._id}-${index}`} // Append index to the key
            onClick={() => handleViewCampground(campground._id)}
          >
            <div className="card-image">
              <img src={campground.imageUrl} alt="Campground" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{campground.name}</h3>
              <p className="card-text">{campground.description}</p>
              <div className="reviews">{campground.reviews} Reviews</div>
              <div className="card-info-container">
                <div className="card-info">
                  <div className="location">
                    <FaMapMarkerAlt size={15} color="grey" />
                    {campground.location}
                  </div>
                  <div className="bed">
                    <FaHouseUser size={15} color="grey" />
                    {campground.bed} Bed(s)
                  </div>
                  <div className="wifi">
                    {campground.wifi && <FaWifi size={15} color="grey" />}
                    {campground.wifi ? "Wifi" : "No Wifi"}
                  </div>
                </div>
                <div className="price-tag">${campground.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SearchResult;
=======
import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaHouseUser, FaWifi } from "react-icons/fa";

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

interface SearchResultProps {
  campgrounds: any[];
}

const SearchResult: React.FC<SearchResultProps> = ({ campgrounds }) => {
  const history = useNavigate();
  const result = campgrounds;
  console.log(result);
  const handleViewCampground = (campgroundId: string) => {
    history(`/campgrounds/${campgroundId}`);
  };

  return (
    <Container className="scroll">
      <div className="cards-container">
        {result.map((campground, index) => (
          <div
            className="card"
            key={`campground-${campground._id}-${index}`} // Append index to the key
            onClick={() => handleViewCampground(campground._id)}
          >
            <div className="card-image">
              <img src={campground.imageUrl} alt="Campground" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{campground.name}</h3>
              <p className="card-text">{campground.description}</p>
              <div className="reviews">{campground.reviews} Reviews</div>
              <div className="card-info-container">
                <div className="card-info">
                  <div className="location">
                    <FaMapMarkerAlt size={15} color="grey" />
                    {campground.location}
                  </div>
                  <div className="bed">
                    <FaHouseUser size={15} color="grey" />
                    {campground.bed} Bed(s)
                  </div>
                  <div className="wifi">
                    {campground.wifi && <FaWifi size={15} color="grey" />}
                    {campground.wifi ? "Wifi" : "No Wifi"}
                  </div>
                </div>
                <div className="price-tag">${campground.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SearchResult;
>>>>>>> 1ebec6a (fix:setup with backend)

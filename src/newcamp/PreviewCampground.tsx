import React from 'react';
import { Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaHouseUser, FaWifi } from "react-icons/fa";

interface PreviewProps {
  name: string;
  location: string;
  description: string;
  bed: number | string;
  price: number | string;
  wifi: any;
  image: File | null;
}

const PreviewCampground: React.FC<PreviewProps> = ({
  name,
  location,
  description,
  bed,
  price,
  wifi,
  image,
}) => {
  const [imageUrl, setImageUrl] = React.useState<string>('');

  React.useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setImageUrl('');
    }
  }, [image]);

  return (
    <div className="cards-container">
    <div
    className="card"
  >
    <div className="card-image">
      <img src={imageUrl} alt="Campground" />
    </div>
    <div className="card-content">
      <h3 className="card-title">{name}</h3>
      <p className="card-text">{description}</p>
      <div className="reviews">10 Reviews</div>
      <div className="card-info-container">
        <div className="card-info">
          <div className="location">
            <FaMapMarkerAlt size={15} color="grey" />
            {location}
          </div>
          <div className="bed">
            <FaHouseUser size={15} color="grey" />
            {bed} Bed(s)
          </div>
          <div className="wifi">
            {wifi && <FaWifi size={15} color="grey" />}
            {wifi ? "Wifi" : "No Wifi"}
          </div>
        </div>
        <div className="price-tag">${price}</div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default PreviewCampground;

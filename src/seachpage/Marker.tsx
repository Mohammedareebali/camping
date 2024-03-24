import React from "react";
import { Marker, Popup } from "react-map-gl";
interface MapMarkerProps {
    latitude: number;
    longitude: number;
    campground: Campground;
    onClick: () => any;
  }
  interface Campground {
    
    _id: string;
    name: string;
    location: string;
    description: string;
    imageUrl: string;
    __v: number;
  }
  
const MapMarker: React.FC<MapMarkerProps> = ({
    latitude,
    longitude,
    campground,
    onClick,
  }) => (
    <Marker latitude={latitude} longitude={longitude}>
      <button className="marker-btn" onClick={onClick}>
        
      </button>
      <Popup
        latitude={latitude}
        longitude={longitude}
        onClose={() => {}}
        closeButton={false}
        anchor="left"
      >
        <div>
          <h2>{campground.name}</h2>
          <p>{campground.location}</p>
          <p>{campground.description}</p>
        </div>
      </Popup>
    </Marker>
  );
  export default MapMarker;
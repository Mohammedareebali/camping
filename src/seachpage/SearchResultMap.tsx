<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import mapboxgl from 'mapbox-gl';

interface MapProps {
  campgrounds: any[];

}

const Maps = ({ campgrounds }: MapProps) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    
  });
  const [selectedCamp, setSelectedCamp] = useState<any>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    // Use flyTo to transition to the new viewport
    if (mapRef.current && campgrounds.length > 0) {
      const bounds = getBounds(campgrounds);
      mapRef.current?.fitBounds([
        [bounds.longitudeSW, bounds.latitudeSW],
        [bounds.longitudeNE, bounds.latitudeNE],
      ],{
        padding: {top: 40, bottom: 40, left: 40, right: 40},
        duration: 1000,
      })
     // mapRef.current?.flyTo({center: [bounds.longitude,bounds.latitude], duration: 2000});
      const { width, height } = mapRef.current?.getContainer()?.getBoundingClientRect();
      const newViewport = {
        ...viewport,
        ...bounds,
        transitionDuration: 1000,
        width,
        height,
        padding: 60,
      };
      setViewport(newViewport);
    }
  }, [campgrounds]);
console.log('hi')
  const getBounds = (campgrounds: any[]) => {
    const bounds = new mapboxgl.LngLatBounds();
    campgrounds.forEach((camp) => {
      bounds.extend([camp.coordinates[0], camp.coordinates[1]]);
    });
    return {
      longitude: bounds.getCenter().lng,
      latitude: bounds.getCenter().lat,
      longitudeSW: bounds.getSouthWest().lng,
      latitudeSW: bounds.getSouthWest().lat,
      longitudeNE: bounds.getNorthEast().lng,
      latitudeNE: bounds.getNorthEast().lat,
    };
  };
  
  return (
    
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v10"

        onMove={evt => setViewport(evt.viewState)}
        mapboxAccessToken={'pk.eyJ1IjoibW9oYW1tZWQtYXJlZWIiLCJhIjoiY2t6ZDdpcG1rMDQyODJwcGMwOGZvZDVveCJ9.VtXqwPfArJoSqOLzFAfu1g' || ''}
      >
        
        {campgrounds.map((camp, index) => (
    <Marker
        key={`${camp._id}-${index}`} 
        latitude={camp.coordinates[1]}
        longitude={camp.coordinates[0]}
    >
        <FaMapMarkerAlt 
            size={30} 
            color={'orangered'} 
            onClick={(e) => {
                e.stopPropagation();  // Prevent the click event from propagating up
                setSelectedCamp(camp);
            }}
        />
    </Marker>
))}


{console.log(selectedCamp)}
        {selectedCamp && (
          <Popup
            latitude={selectedCamp.coordinates[1]}
            longitude={selectedCamp.coordinates[0]}
            onClose={() => {
              setSelectedCamp(null);
            }}
          >
            <div>
            <Link to={`/campgrounds/${selectedCamp._id}`} style={{color:'black'}}>
          <h3>{selectedCamp.name}</h3>
        </Link>
        <p>{selectedCamp.price} per night</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    
  );
};

export default Maps;
=======
import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import mapboxgl from 'mapbox-gl';

interface MapProps {
  campgrounds: any[];

}

const Maps = ({ campgrounds }: MapProps) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    
  });
  const [selectedCamp, setSelectedCamp] = useState<any>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    // Use flyTo to transition to the new viewport
    if (mapRef.current && campgrounds.length > 0) {
      const bounds = getBounds(campgrounds);
      mapRef.current?.fitBounds([
        [bounds.longitudeSW, bounds.latitudeSW],
        [bounds.longitudeNE, bounds.latitudeNE],
      ],{
        padding: {top: 40, bottom: 40, left: 40, right: 40},
        duration: 1000,
      })
     // mapRef.current?.flyTo({center: [bounds.longitude,bounds.latitude], duration: 2000});
      const { width, height } = mapRef.current?.getContainer()?.getBoundingClientRect();
      const newViewport = {
        ...viewport,
        ...bounds,
        transitionDuration: 1000,
        width,
        height,
        padding: 60,
      };
      setViewport(newViewport);
    }
  }, [campgrounds]);
console.log('hi')
  const getBounds = (campgrounds: any[]) => {
    const bounds = new mapboxgl.LngLatBounds();
    campgrounds.forEach((camp) => {
      bounds.extend([camp.coordinates[0], camp.coordinates[1]]);
    });
    return {
      longitude: bounds.getCenter().lng,
      latitude: bounds.getCenter().lat,
      longitudeSW: bounds.getSouthWest().lng,
      latitudeSW: bounds.getSouthWest().lat,
      longitudeNE: bounds.getNorthEast().lng,
      latitudeNE: bounds.getNorthEast().lat,
    };
  };
  
  return (
    
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v10"

        onMove={evt => setViewport(evt.viewState)}
        mapboxAccessToken={'pk.eyJ1IjoibW9oYW1tZWQtYXJlZWIiLCJhIjoiY2t6ZDdpcG1rMDQyODJwcGMwOGZvZDVveCJ9.VtXqwPfArJoSqOLzFAfu1g' || ''}
      >
        
        {campgrounds.map((camp, index) => (
    <Marker
        key={`${camp._id}-${index}`} 
        latitude={camp.coordinates[1]}
        longitude={camp.coordinates[0]}
    >
        <FaMapMarkerAlt 
            size={30} 
            color={'orangered'} 
            onClick={(e) => {
                e.stopPropagation();  // Prevent the click event from propagating up
                setSelectedCamp(camp);
            }}
        />
    </Marker>
))}


{console.log(selectedCamp)}
        {selectedCamp && (
          <Popup
            latitude={selectedCamp.coordinates[1]}
            longitude={selectedCamp.coordinates[0]}
            onClose={() => {
              setSelectedCamp(null);
            }}
          >
            <div>
            <Link to={`/campgrounds/${selectedCamp._id}`} style={{color:'black'}}>
          <h3>{selectedCamp.name}</h3>
        </Link>
        <p>{selectedCamp.price} per night</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    
  );
};

export default Maps;
>>>>>>> 1ebec6a (fix:setup with backend)

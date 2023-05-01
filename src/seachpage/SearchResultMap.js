import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import mapboxgl from 'mapbox-gl';
const Maps = ({ campgrounds }) => {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
    });
    const [selectedCamp, setSelectedCamp] = useState(null);
    const mapRef = useRef(null);
    useEffect(() => {
        // Use flyTo to transition to the new viewport
        if (mapRef.current && campgrounds.length > 0) {
            const bounds = getBounds(campgrounds);
            mapRef.current?.fitBounds([
                [bounds.longitudeSW, bounds.latitudeSW],
                [bounds.longitudeNE, bounds.latitudeNE],
            ], {
                padding: { top: 40, bottom: 40, left: 40, right: 40 },
                duration: 1000,
            });
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
    console.log('hi');
    const getBounds = (campgrounds) => {
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
    return (_jsxs(ReactMapGL, { ...viewport, ref: mapRef, style: { width: '100%', height: '100%' }, mapStyle: "mapbox://styles/mapbox/dark-v10", onMove: evt => setViewport(evt.viewState), mapboxAccessToken: 'pk.eyJ1IjoibW9oYW1tZWQtYXJlZWIiLCJhIjoiY2t6ZDdpcG1rMDQyODJwcGMwOGZvZDVveCJ9.VtXqwPfArJoSqOLzFAfu1g' || '', children: [campgrounds.map((camp, index) => (_jsx(Marker, { latitude: camp.coordinates[1], longitude: camp.coordinates[0], children: _jsx(FaMapMarkerAlt, { size: 30, color: 'orangered', onClick: (e) => {
                        e.preventDefault();
                        setSelectedCamp(camp);
                    } }) }, `${camp._id}-${index}`))), selectedCamp && (_jsx(Popup, { latitude: selectedCamp.coordinates[1], longitude: selectedCamp.coordinates[0], onClose: () => {
                    setSelectedCamp(null);
                }, children: _jsxs("div", { children: [_jsx("h2", { children: selectedCamp.title }), _jsx("p", { children: selectedCamp.description })] }) }))] }));
};
export default Maps;
//# sourceMappingURL=SearchResultMap.js.map
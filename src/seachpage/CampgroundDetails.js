import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ReviewPopup from "./ReviewPopup.js";
import ReviewDisplay from './ReviewDisplay.js';
const CampgroundDetails = ({ token }) => {
    const { campgroundId } = useParams();
    const selectedCampgroundId = campgroundId;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [campground, setCampground] = useState(null);
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
    const handleSaveReview = async (review, emojiRating) => {
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
        }
        catch (error) {
            console.error(error);
            navigate('/login');
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
            }
            catch (error) {
                console.error(error);
                setError("Failed to fetch campground details");
            }
        };
        fetchData();
    }, []);
    if (error) {
        return _jsx("p", { children: error });
    }
    if (loading || !campground) {
        return _jsx("p", { children: "Loading..." });
    }
    return (_jsxs(Container, { children: [_jsx(Row, { children: _jsx(Col, { children: _jsx("h1", { children: campground.name }) }) }), _jsx(Row, { children: _jsx(Col, { children: _jsx(Card, { children: _jsx(Card.Img, { variant: "top", src: campground.imageUrl }) }, campground._id) }) }), _jsxs(Row, { className: "secondrow", children: [_jsx(Col, { md: 6, children: _jsx(Card, { children: _jsx(Card.Body, { children: _jsx(Card.Text, { children: campground.description }) }) }) }), _jsx(Col, { md: 6, children: _jsx("div", { style: { width: "100%", height: "400px" }, children: _jsx(Map, { ...viewport, style: { width: "100%", height: "100%" }, mapStyle: "mapbox://styles/mapbox/streets-v9", onMove: (evt) => setViewport(evt.viewState), mapboxAccessToken: "pk.eyJ1IjoibW9oYW1tZWQtYXJlZWIiLCJhIjoiY2t6ZDdpcG1rMDQyODJwcGMwOGZvZDVveCJ9.VtXqwPfArJoSqOLzFAfu1g" ||
                                    "", children: campground.coordinates ? (_jsx(Marker, { latitude: campground.coordinates[1], longitude: campground.coordinates[0] })) : null }) }) })] }), _jsx(Row, { children: _jsx(Col, { children: _jsx(ReviewDisplay, { reviews: reviews }) }) }), _jsx(Row, { children: _jsxs(Col, { children: [_jsx(Button, { onClick: () => setShowReviewPopup(true), children: "Add Review" }), _jsx(ReviewPopup, { show: showReviewPopup, handleClose: () => setShowReviewPopup(false), handleSave: handleSaveReview })] }) })] }));
};
export default CampgroundDetails;
//# sourceMappingURL=CampgroundDetails.js.map
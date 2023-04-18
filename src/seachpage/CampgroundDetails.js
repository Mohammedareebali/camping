"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const react_map_gl_1 = __importStar(require("react-map-gl"));
require("mapbox-gl/dist/mapbox-gl.css");
const ReviewPopup_1 = __importDefault(require("./ReviewPopup"));
const ReviewDisplay_1 = __importDefault(require("./ReviewDisplay"));
const CampgroundDetails = ({ token }) => {
    const { campgroundId } = (0, react_router_dom_1.useParams)();
    const selectedCampgroundId = campgroundId;
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)("");
    const [campground, setCampground] = (0, react_1.useState)(null);
    // Add new state for reviews
    const [reviews, setReviews] = (0, react_1.useState)([]);
    const [viewport, setViewport] = (0, react_1.useState)({
        latitude: 0,
        longitude: 0,
        zoom: 10,
    });
    const [showReviewPopup, setShowReviewPopup] = (0, react_1.useState)(false); // Add this state
    const navigate = (0, react_router_dom_1.useNavigate)();
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
    (0, react_1.useEffect)(() => {
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
        return react_1.default.createElement("p", null, error);
    }
    if (loading || !campground) {
        return react_1.default.createElement("p", null, "Loading...");
    }
    return (react_1.default.createElement(react_bootstrap_1.Container, null,
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, null,
                react_1.default.createElement("h1", null, campground.name))),
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, null,
                react_1.default.createElement(react_bootstrap_1.Card, { key: campground._id },
                    react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: campground.imageUrl })))),
        react_1.default.createElement(react_bootstrap_1.Row, { className: "secondrow" },
            react_1.default.createElement(react_bootstrap_1.Col, { md: 6 },
                react_1.default.createElement(react_bootstrap_1.Card, null,
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement(react_bootstrap_1.Card.Text, null, campground.description)))),
            react_1.default.createElement(react_bootstrap_1.Col, { md: 6 },
                react_1.default.createElement("div", { style: { width: "100%", height: "400px" } },
                    react_1.default.createElement(react_map_gl_1.default, { ...viewport, style: { width: "100%", height: "100%" }, mapStyle: "mapbox://styles/mapbox/streets-v9", onMove: (evt) => setViewport(evt.viewState), mapboxAccessToken: "pk.eyJ1IjoibW9oYW1tZWQtYXJlZWIiLCJhIjoiY2t6ZDdpcG1rMDQyODJwcGMwOGZvZDVveCJ9.VtXqwPfArJoSqOLzFAfu1g" ||
                            "" }, campground.coordinates ? (react_1.default.createElement(react_map_gl_1.Marker, { latitude: campground.coordinates[1], longitude: campground.coordinates[0] })) : null)))),
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, null,
                react_1.default.createElement(ReviewDisplay_1.default, { reviews: reviews }))),
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, null,
                react_1.default.createElement(react_bootstrap_1.Button, { onClick: () => setShowReviewPopup(true) }, "Add Review"),
                react_1.default.createElement(ReviewPopup_1.default, { show: showReviewPopup, handleClose: () => setShowReviewPopup(false), handleSave: handleSaveReview })))));
};
exports.default = CampgroundDetails;
//# sourceMappingURL=CampgroundDetails.js.map
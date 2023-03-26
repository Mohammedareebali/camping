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
const opencage_api_client_1 = __importDefault(require("opencage-api-client"));
const CampgroundDetails = () => {
    const { campgroundId } = (0, react_router_dom_1.useParams)();
    const [coordinates, setCoordinates] = (0, react_1.useState)(null);
    const selectedCampgroundId = campgroundId;
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)("");
    const [campground, setCampground] = (0, react_1.useState)(null);
    const [viewport, setViewport] = (0, react_1.useState)({
        latitude: 0,
        longitude: 0,
        zoom: 10,
    });
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/campgrounds/${selectedCampgroundId}`);
                const data = await response.json();
                setCampground(data);
                setLoading(false);
            }
            catch (error) {
                console.error(error);
                setError("Failed to fetch campground details");
            }
        };
        fetchData();
    }, [selectedCampgroundId]);
    (0, react_1.useEffect)(() => {
        const geocodeAddress = async () => {
            if (campground && campground.location) {
                console.log(campground.location);
                try {
                    const response = await opencage_api_client_1.default.geocode({
                        q: campground.location,
                        key: 'd1bccab3f5cc481d98a31418e2029d28'
                    });
                    if (response.results.length > 0) {
                        const { lat, lng } = response.results[0].geometry;
                        console.log(coordinates);
                        setViewport({
                            latitude: coordinates ? coordinates[0] : lat,
                            longitude: coordinates ? coordinates[1] : lng,
                            zoom: 10,
                        });
                        setCoordinates([lat, lng]);
                    }
                }
                catch (error) {
                    console.error(error);
                    setError("Failed to geocode campground location");
                }
            }
        };
        geocodeAddress();
    }, [campground]);
    if (error) {
        return react_1.default.createElement("p", null, error);
    }
    if (loading || !campground) {
        return react_1.default.createElement("p", null, "Loading...");
    }
    return (react_1.default.createElement(react_bootstrap_1.Container, null,
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "col-md-6" },
                react_1.default.createElement(react_bootstrap_1.Card, null,
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement("div", { style: { width: "100%", height: "400px" } },
                            react_1.default.createElement(react_map_gl_1.default, { ...viewport, style: { width: "100%", height: "100%" }, mapStyle: "mapbox://styles/mapbox/streets-v9", onMove: evt => setViewport(evt.viewState), mapboxAccessToken: 'pk.eyJ1IjoibW9oYW1tZWQtYXJlZWIiLCJhIjoiY2t6ZDdpcG1rMDQyODJwcGMwOGZvZDVveCJ9.VtXqwPfArJoSqOLzFAfu1g' || "" }, coordinates ? react_1.default.createElement(react_map_gl_1.Marker, { latitude: coordinates[0], longitude: coordinates[1] }) : null))))),
            react_1.default.createElement("div", { className: "col-md-6" },
                react_1.default.createElement(react_bootstrap_1.Card, { key: campground._id },
                    react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: campground.imageUrl }),
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement(react_bootstrap_1.Card.Title, null, campground.name),
                        react_1.default.createElement(react_bootstrap_1.Card.Text, null, campground.description)))))));
};
exports.default = CampgroundDetails;
//# sourceMappingURL=CampgroundDetails.js.map
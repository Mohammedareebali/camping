"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const fa_1 = require("react-icons/fa");
const SearchResult = ({ campgrounds }) => {
    const history = (0, react_router_dom_1.useNavigate)();
    const result = campgrounds;
    const handleViewCampground = (campgroundId) => {
        history(`/campgrounds/${campgroundId}`);
    };
    console.log(campgrounds);
    return (react_1.default.createElement(react_bootstrap_1.Container, { className: "scroll" },
        react_1.default.createElement("div", { className: "cards-container" }, result.map((campground) => (react_1.default.createElement("div", { className: "card", key: campground._id, onClick: () => handleViewCampground(campground._id) },
            react_1.default.createElement("div", { className: "card-image" },
                react_1.default.createElement("img", { src: campground.imageUrl, alt: "Campground" })),
            react_1.default.createElement("div", { className: "card-content" },
                react_1.default.createElement("h3", { className: "card-title" }, campground.name),
                react_1.default.createElement("p", { className: "card-text" }, campground.description),
                react_1.default.createElement("div", { className: "reviews" },
                    campground.reviews,
                    " Reviews"),
                react_1.default.createElement("div", { className: "card-info-container" },
                    react_1.default.createElement("div", { className: "card-info" },
                        react_1.default.createElement("div", { className: "location" },
                            react_1.default.createElement(fa_1.FaMapMarkerAlt, { size: 15, color: "grey" }),
                            campground.location),
                        react_1.default.createElement("div", { className: "bed" },
                            react_1.default.createElement(fa_1.FaHouseUser, { size: 15, color: "grey" }),
                            campground.bed,
                            " Bed(s)"),
                        react_1.default.createElement("div", { className: "wifi" },
                            campground.wifi && react_1.default.createElement(fa_1.FaWifi, { size: 15, color: "grey" }),
                            campground.wifi ? "Wifi" : "No Wifi")),
                    react_1.default.createElement("div", { className: "price-tag" },
                        "$",
                        campground.price)))))))));
};
exports.default = SearchResult;
//# sourceMappingURL=SearchResult.js.map
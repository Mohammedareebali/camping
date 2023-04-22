import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaHouseUser, FaWifi } from "react-icons/fa";
const SearchResult = ({ campgrounds }) => {
    const history = useNavigate();
    const result = campgrounds;
    console.log(result);
    const handleViewCampground = (campgroundId) => {
        history(`/campgrounds/${campgroundId}`);
    };
    return (_jsx(Container, { className: "scroll", children: _jsx("div", { className: "cards-container", children: result.map((campground, index) => (_jsxs("div", { className: "card", onClick: () => handleViewCampground(campground._id), children: [_jsx("div", { className: "card-image", children: _jsx("img", { src: campground.imageUrl, alt: "Campground" }) }), _jsxs("div", { className: "card-content", children: [_jsx("h3", { className: "card-title", children: campground.name }), _jsx("p", { className: "card-text", children: campground.description }), _jsxs("div", { className: "reviews", children: [campground.reviews, " Reviews"] }), _jsxs("div", { className: "card-info-container", children: [_jsxs("div", { className: "card-info", children: [_jsxs("div", { className: "location", children: [_jsx(FaMapMarkerAlt, { size: 15, color: "grey" }), campground.location] }), _jsxs("div", { className: "bed", children: [_jsx(FaHouseUser, { size: 15, color: "grey" }), campground.bed, " Bed(s)"] }), _jsxs("div", { className: "wifi", children: [campground.wifi && _jsx(FaWifi, { size: 15, color: "grey" }), campground.wifi ? "Wifi" : "No Wifi"] })] }), _jsxs("div", { className: "price-tag", children: ["$", campground.price] })] })] })] }, `campground-${campground._id}-${index}`))) }) }));
};
export default SearchResult;
//# sourceMappingURL=SearchResult.js.map
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { FaMapMarkerAlt, FaHouseUser, FaWifi } from "react-icons/fa";
const PreviewCampground = ({ name, location, description, bed, price, wifi, image, }) => {
    const [imageUrl, setImageUrl] = React.useState('');
    React.useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(image);
        }
        else {
            setImageUrl('');
        }
    }, [image]);
    return (_jsx("div", { className: "cards-container", children: _jsxs("div", { className: "card", children: [_jsx("div", { className: "card-image", children: _jsx("img", { src: imageUrl, alt: "Campground" }) }), _jsxs("div", { className: "card-content", children: [_jsx("h3", { className: "card-title", children: name }), _jsx("p", { className: "card-text", children: description }), _jsx("div", { className: "reviews", children: "10 Reviews" }), _jsxs("div", { className: "card-info-container", children: [_jsxs("div", { className: "card-info", children: [_jsxs("div", { className: "location", children: [_jsx(FaMapMarkerAlt, { size: 15, color: "grey" }), location] }), _jsxs("div", { className: "bed", children: [_jsx(FaHouseUser, { size: 15, color: "grey" }), bed, " Bed(s)"] }), _jsxs("div", { className: "wifi", children: [wifi && _jsx(FaWifi, { size: 15, color: "grey" }), wifi ? "Wifi" : "No Wifi"] })] }), _jsxs("div", { className: "price-tag", children: ["$", price] })] })] })] }) }));
};
export default PreviewCampground;
//# sourceMappingURL=PreviewCampground.js.map
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Marker, Popup } from "react-map-gl";
const MapMarker = ({ latitude, longitude, campground, onClick, }) => (_jsxs(Marker, { latitude: latitude, longitude: longitude, children: [_jsx("button", { className: "marker-btn", onClick: onClick }), _jsx(Popup, { latitude: latitude, longitude: longitude, onClose: () => { }, closeButton: false, anchor: "left", children: _jsxs("div", { children: [_jsx("h2", { children: campground.name }), _jsx("p", { children: campground.location }), _jsx("p", { children: campground.description })] }) })] }));
export default MapMarker;
//# sourceMappingURL=Marker.js.map
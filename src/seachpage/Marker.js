"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_map_gl_1 = require("react-map-gl");
const MapMarker = ({ latitude, longitude, campground, onClick, }) => (react_1.default.createElement(react_map_gl_1.Marker, { latitude: latitude, longitude: longitude },
    react_1.default.createElement("button", { className: "marker-btn", onClick: onClick }),
    react_1.default.createElement(react_map_gl_1.Popup, { latitude: latitude, longitude: longitude, onClose: () => { }, closeButton: false, anchor: "left" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, campground.name),
            react_1.default.createElement("p", null, campground.location),
            react_1.default.createElement("p", null, campground.description)))));
exports.default = MapMarker;
//# sourceMappingURL=Marker.js.map
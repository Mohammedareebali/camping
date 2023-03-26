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
const react_map_gl_1 = __importStar(require("react-map-gl"));
const fa_1 = require("react-icons/fa");
const mapbox_gl_1 = __importDefault(require("mapbox-gl"));
const Maps = ({ campgrounds }) => {
    const [viewport, setViewport] = (0, react_1.useState)({
        latitude: 37.7577,
        longitude: -122.4376,
    });
    const [selectedCamp, setSelectedCamp] = (0, react_1.useState)(null);
    const mapRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
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
        const bounds = new mapbox_gl_1.default.LngLatBounds();
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
    return (react_1.default.createElement(react_map_gl_1.default, { ...viewport, ref: mapRef, style: { width: '100%', height: '100%' }, mapStyle: "mapbox://styles/mapbox/light-v11", onMove: evt => setViewport(evt.viewState), mapboxAccessToken: 'pk.eyJ1IjoibW9oYW1tZWQtYXJlZWIiLCJhIjoiY2t6ZDdpcG1rMDQyODJwcGMwOGZvZDVveCJ9.VtXqwPfArJoSqOLzFAfu1g' || '' },
        campgrounds.map((camp) => (react_1.default.createElement(react_map_gl_1.Marker, { key: camp._id, latitude: camp.coordinates[1], longitude: camp.coordinates[0] },
            react_1.default.createElement(fa_1.FaMapMarkerAlt, { size: 30, color: '#3f51b5', onClick: (e) => {
                    e.preventDefault();
                    setSelectedCamp(camp);
                } })))),
        selectedCamp && (react_1.default.createElement(react_map_gl_1.Popup, { latitude: selectedCamp.coordinates[1], longitude: selectedCamp.coordinates[0], onClose: () => {
                setSelectedCamp(null);
            } },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", null, selectedCamp.title),
                react_1.default.createElement("p", null, selectedCamp.description))))));
};
exports.default = Maps;
//# sourceMappingURL=SearchResultMap.js.map
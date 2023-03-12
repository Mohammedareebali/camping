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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const SearchResult = ({ searchResults, data }) => {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [campgrounds, setCampgrounds] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/campgrounds");
                const data = await response.json();
                setCampgrounds(data);
                setLoading(false);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const result = searchResults && searchResults.length > 0 ? searchResults : campgrounds;
    return (react_1.default.createElement(react_bootstrap_1.Container, null, loading ? (react_1.default.createElement("p", null, "Loading...")) : (react_1.default.createElement("div", { className: "card-deck" }, result.reverse().map((campground) => (react_1.default.createElement(react_bootstrap_1.Card, { key: campground._id },
        react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: campground.imageUrl }),
        react_1.default.createElement(react_bootstrap_1.Card.Body, null,
            react_1.default.createElement(react_bootstrap_1.Card.Title, null, campground.name),
            react_1.default.createElement(react_bootstrap_1.Card.Text, null, campground.description)))))))));
};
exports.default = SearchResult;
//# sourceMappingURL=SearchResult.js.map
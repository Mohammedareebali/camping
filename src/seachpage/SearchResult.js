"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const SearchResult = ({ searchResults }) => {
    return (react_1.default.createElement("div", { className: "card-deck" }, searchResults &&
        searchResults.reverse().map((campground) => (react_1.default.createElement(react_bootstrap_1.Card, { key: campground._id },
            react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: campground.imageUrl }),
            react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                react_1.default.createElement(react_bootstrap_1.Card.Title, null, campground.name),
                react_1.default.createElement(react_bootstrap_1.Card.Text, null, campground.description)))))));
};
exports.default = SearchResult;
//# sourceMappingURL=SearchResult.js.map
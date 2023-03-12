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
const react_bootstrap_1 = require("react-bootstrap");
const SearchResult_1 = __importDefault(require("./SearchResult"));
const SearchComponent = () => {
    const [query, setQuery] = (0, react_1.useState)("");
    const [searchResults, setSearchResults] = (0, react_1.useState)([]);
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/search?q=${query}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            // handle the data
            setSearchResults(data);
        }
        catch (error) {
            console.log(`message:${error}`);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_bootstrap_1.Container, { className: "bg-light p-4" },
            react_1.default.createElement("h2", null, "Welcome to YelpCamp"),
            react_1.default.createElement("p", null, "View our handpicked campgrounds from all over the world, or add your own."),
            react_1.default.createElement(react_bootstrap_1.Form, { onSubmit: handleSearch, className: "d-flex" },
                react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "text", placeholder: "Search campgrounds...", className: "me-2", value: query, onChange: (e) => setQuery(e.target.value) }),
                react_1.default.createElement(react_bootstrap_1.Button, { variant: "dark", type: "submit" }, "Search")),
            react_1.default.createElement("p", { className: "mt-3" },
                react_1.default.createElement("a", { href: "/new", className: "text-decoration-none" }, "Add your own campground"))),
        react_1.default.createElement(SearchResult_1.default, { searchResults: searchResults })));
};
exports.default = SearchComponent;
//# sourceMappingURL=SearchForm.js.map
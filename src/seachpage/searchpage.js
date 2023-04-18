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
const Nav_1 = __importDefault(require("../components/Nav"));
const SearchForm_1 = __importDefault(require("./SearchForm"));
const SearchResultMap_1 = __importDefault(require("./SearchResultMap"));
function Searchpage() {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [campgrounds, setCampgrounds] = (0, react_1.useState)([]);
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const [noResultsMessage, setNoResultsMessage] = (0, react_1.useState)('');
    const [searchQuery, setSearchQuery] = (0, react_1.useState)('');
    const [hasMore, setHasMore] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const fetchCampgrounds = async () => {
            try {
                const url = searchQuery
                    ? `/search?q=${searchQuery}&page=${currentPage}`
                    : `/campgrounds?page=${currentPage}`;
                const response = await fetch(url);
                const data = await response.json();
                // Check if there are more results
                console.log(data);
                if (data.current == data.pages) {
                    setCampgrounds(prevCampgrounds => [...prevCampgrounds, ...data.campgrounds]);
                    setHasMore(false);
                }
                else {
                    setCampgrounds(prevCampgrounds => [...prevCampgrounds, ...data.campgrounds]);
                    setLoading(false);
                }
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchCampgrounds();
    }, [currentPage, searchQuery]);
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true before the search
        const formData = new FormData(e.currentTarget);
        const query = formData.get('query');
        setSearchQuery(query);
        setCurrentPage(1); // Reset the current page to 1
        setCampgrounds([]); // Clear the campgrounds state
        try {
            const response = await fetch(`/search?q=${query}&page=1`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            console.log(data);
            if (data.campgrounds.length === 0) {
                setNoResultsMessage('No results found for your search query.');
            }
            else {
                setNoResultsMessage('');
            }
            // Check if there are more results
            if (data.current == data.pages) {
                setHasMore(false);
            }
            else {
                setHasMore(true);
            }
            // Replace the existing campgrounds with the new search results
            setCampgrounds(data.campgrounds);
            setLoading(false); // Set loading to false after the search request is completed
        }
        catch (error) {
            console.error(error);
            setLoading(false); // Set loading to false if an error occurs
        }
    };
    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    return (react_1.default.createElement("div", { className: 'searchpage' },
        react_1.default.createElement("div", { className: 'search-container' },
            react_1.default.createElement(Nav_1.default, null),
            react_1.default.createElement("div", { className: 'searchresult' },
                react_1.default.createElement(Nav_1.default, null),
                react_1.default.createElement(SearchForm_1.default, { handleSearch: handleSearch, campgrounds: campgrounds }),
                noResultsMessage && react_1.default.createElement("p", { className: "no-results-message" }, noResultsMessage),
                hasMore && (react_1.default.createElement("div", { className: 'loading' }, loading ? (react_1.default.createElement("div", { className: 'spinner' })) : (react_1.default.createElement("button", { className: 'load-more-btn', onClick: handleNextPage, disabled: loading },
                    ' ',
                    "load more"))))),
            react_1.default.createElement("div", { className: 'map-container' },
                react_1.default.createElement(SearchResultMap_1.default, { campgrounds: campgrounds })))));
}
exports.default = Searchpage;
//# sourceMappingURL=searchpage.js.map
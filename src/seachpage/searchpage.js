import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Nav from '../components/Nav.js';
import SearchComponent from './SearchForm.js';
import Maps from './SearchResultMap.js';
export default function Searchpage() {
    const [loading, setLoading] = useState(true);
    const [campgrounds, setCampgrounds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [noResultsMessage, setNoResultsMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
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
    return (_jsx("div", { className: 'searchpage', children: _jsxs("div", { className: 'search-container', children: [_jsx(Nav, {}), _jsxs("div", { className: 'searchresult', children: [_jsx(Nav, {}), _jsx(SearchComponent, { handleSearch: handleSearch, campgrounds: campgrounds }), noResultsMessage && _jsx("p", { className: "no-results-message", children: noResultsMessage }), hasMore && (_jsx("div", { className: 'loading', children: loading ? (_jsx("div", { className: 'spinner' })) : (_jsxs("button", { className: 'load-more-btn', onClick: handleNextPage, disabled: loading, children: [' ', "load more"] })) }))] }), _jsx("div", { className: 'map-container', children: _jsx(Maps, { campgrounds: campgrounds }) })] }) }));
}
//# sourceMappingURL=searchpage.js.map
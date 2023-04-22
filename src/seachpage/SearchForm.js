import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import SearchResult from "./SearchResult.js";
const SearchComponent = ({ handleSearch, campgrounds }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleClear = () => {
        setSearchQuery("");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Container, { className: " p-4", children: _jsxs(Form, { onSubmit: handleSearch, className: "d-flex", children: [_jsx(Form.Control, { type: "text", placeholder: 'search', className: "me-2", name: 'query', value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }), _jsx(Button, { variant: "light", type: "button", className: "me-2 clear-btn", onClick: handleClear, children: "Clear" }), _jsx(Button, { variant: "dark", type: "submit", className: "search-btn", children: "Search" })] }) }), _jsx(SearchResult, { campgrounds: campgrounds })] }));
};
export default SearchComponent;
//# sourceMappingURL=SearchForm.js.map
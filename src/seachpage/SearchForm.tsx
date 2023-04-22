import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

import SearchResult from "./SearchResult.js";
interface SearchProps {
  handleSearch : any;
  campgrounds: any;
}

const SearchComponent: React.FC<SearchProps> = ({handleSearch,campgrounds}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClear = () => {
    setSearchQuery("");
  };
  return (
   
    <>
    <Container className=" p-4">
     <Form onSubmit={handleSearch} className="d-flex">

        <Form.Control
          type="text"
          placeholder='search'
          className="me-2"
          name = 'query'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="light" type="button" className="me-2 clear-btn" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="dark" type="submit" className="search-btn">
            Search
          </Button>
      </Form>
     
    </Container>
    <SearchResult campgrounds={campgrounds} />
    </>
  );
};

export default SearchComponent;

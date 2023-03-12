import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import SearchResult from "./SearchResult";

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    try{
    const response = await fetch(`/search?q=${query}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},});
    const data = await response.json();
    // handle the data
    
    setSearchResults(data);

    }
    catch(error){
        console.log(`message:${error}`);
    }
  };

  return (
    <>
    <Container className="bg-light p-4">
      <h2>Welcome to YelpCamp</h2>
      <p>View our handpicked campgrounds from all over the world, or add your own.</p>
      <Form onSubmit={handleSearch} className="d-flex">
        <Form.Control
          type="text"
          placeholder="Search campgrounds..."
          className="me-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="dark" type="submit">
          Search
        </Button>
      </Form>
      <p className="mt-3">
        <a href="/new" className="text-decoration-none">
          Add your own campground
        </a>
      </p>
    </Container>
    <SearchResult searchResults={searchResults}/>
    </>
  );
};

export default SearchComponent;

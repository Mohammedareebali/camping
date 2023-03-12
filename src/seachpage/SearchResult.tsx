import React from "react";
import { Card, CardGroup } from "react-bootstrap";


interface Campground {
  _id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  __v: number;
}

interface SearchResultProps {
  searchResults: Campground[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResults }) => {
  return (
    <div className="card-deck">
      {searchResults &&
        searchResults.reverse().map((campground) => (
          <Card key={campground._id}>
            <Card.Img variant="top" src={campground.imageUrl} />
            <Card.Body>
              <Card.Title>{campground.name}</Card.Title>
              <Card.Text>{campground.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default SearchResult;

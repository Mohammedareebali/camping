import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

interface Campground {
  _id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  __v: number;
}

interface SearchResultProps {
  searchResults?: Campground[];
  data?: Campground[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResults, data }) => {
  const [loading, setLoading] = useState(true);
  const [campgrounds, setCampgrounds] = useState<Campground[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/campgrounds");
        const data = await response.json();
        setCampgrounds(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const result = searchResults && searchResults.length > 0 ? searchResults : campgrounds;

  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-deck">
          {result.reverse().map((campground) => (
            <Card key={campground._id}>
              <Card.Img variant="top" src={campground.imageUrl} />
              <Card.Body>
                <Card.Title>{campground.name}</Card.Title>
                <Card.Text>{campground.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default SearchResult;

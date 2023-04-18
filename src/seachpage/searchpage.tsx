import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import SearchComponent from './SearchForm';
import Maps from './SearchResultMap';

interface Campground {
  coordinates: [number, number];
  _id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  __v: number;
}

export default function Searchpage() {
  const [loading, setLoading] = useState(true);
  const [campgrounds, setCampgrounds] = useState<Campground[]>([]);
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
        console.log(data)
        if (data.current == data.pages) {
          setCampgrounds(prevCampgrounds => [...prevCampgrounds, ...data.campgrounds]);
          setHasMore(false);
          
        } else {
          setCampgrounds(prevCampgrounds => [...prevCampgrounds, ...data.campgrounds]);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCampgrounds();
  }, [currentPage, searchQuery]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true); // Set loading to true before the search
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query') as string;
    setSearchQuery(query);
  
    setCurrentPage(1); // Reset the current page to 1
    setCampgrounds([]); // Clear the campgrounds state
  
    try {
      const response = await fetch(`/search?q=${query}&page=1`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log(data)
      if (data.campgrounds.length === 0) {
        setNoResultsMessage('No results found for your search query.');
      } else {
        setNoResultsMessage('');
      }
  
      // Check if there are more results
      if (data.current == data.pages) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      
      // Replace the existing campgrounds with the new search results
      setCampgrounds(data.campgrounds);
      setLoading(false); // Set loading to false after the search request is completed
  
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false if an error occurs
    }
  };
  
  
  
  

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
  <div className='searchpage'>
    <div className='search-container'>
      <Nav />
      <div className='searchresult'>
        <Nav />
        <SearchComponent handleSearch={handleSearch} campgrounds={campgrounds} />
        {noResultsMessage && <p className="no-results-message">{noResultsMessage}</p>}
        {hasMore && (
          <div className='loading'>
            {loading ? (
              <div className='spinner'></div>
            ) : (
              <button className='load-more-btn' onClick={handleNextPage} disabled={loading}>
                {' '}
                load more
              </button>
            )}
          </div>
        )}
      </div>
      <div className='map-container'>
        <Maps campgrounds={campgrounds} />
      </div>
    </div>
  </div>
);

}

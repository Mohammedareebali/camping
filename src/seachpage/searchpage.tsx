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
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchCampgrounds = async () => {
      try {
        const response = await fetch(`/campgrounds?page=${currentPage}`);
        const data = await response.json();

        // Check if there are more results
        console.log(data)
        if (data.current == data.pages) {
          setHasMore(false);
          setCampgrounds(prevCampgrounds => [...prevCampgrounds, ...data.campgrounds]);
        } else {
          setCampgrounds(prevCampgrounds => [...prevCampgrounds, ...data.campgrounds]);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCampgrounds();
  }, [currentPage]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query') as string;

    try {
      const response = await fetch(`/search?q=${query}&page=${currentPage}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      // Check if there are more results
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setCampgrounds(data);
        setHasMore(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className='searchpage'>
      <div className='search-container'>
        
      <Nav/>
      
        <div className='searchresult'>
        <Nav/>
          <SearchComponent handleSearch={handleSearch} campgrounds={campgrounds} />
          {hasMore && (
            <div className='loading' >
              {loading ? <div className="spinner"></div> :<button className='load-more-btn' onClick={handleNextPage} disabled={loading}> load more</button> }
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

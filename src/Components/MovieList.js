
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';
import LRUCache from 'lru-cache';



function MovieList({searchName}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    
    const cache = new LRUCache({ max: 300 });


    // const fetchMovies = async (searchTerm, page) => {
    //     const { data, error } = useSWR(`http://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=37d2046b`, fetcher);
    //     setTotalResults(data.totalResults);
    //     return data;
    //   }

    const fetchMovies = async (searchTerm, page) => {

        const cacheKey = `movies:${searchTerm}`;
        const cachedData = cache.get(cacheKey);
        

        // While making request to the OMDb API, first check if the data is already in the cache. If it is, return the cached data. If it's not, fetch the data from the API and add it to the cache:
        if (cachedData) {
            return cachedData;
          }

        const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=37d2046b`);
        setTotalResults(response.data.totalResults);

        if (response.data.Search) {
            cache.set(cacheKey, response.data);
          }

        return response.data.Search;
      }
    

    useEffect(() => {
        fetchMovies(searchName, currentPage)
          .then((data) => {
            setMovies(data);
          })
          .catch((error) => {
            alert("TOO MANY MOVIES NAMED WITH SEARCHED WORD, PLEASE SEARCH WITH MORE TITLE INFORMATION")
            console.error(error);
          });
      }, [searchName]);

      const handleLoadMore = () => {
        const nextPage = currentPage + 1;
        fetchMovies(searchName, nextPage)
          .then((data) => {
            setMovies((prevMovies) => [...prevMovies, ...data]);
            setCurrentPage(nextPage);
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
  return (
    <>
    <div className='w-[90%] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 mx-auto'> 
          {movies.map((movie)=>{
            return movie.Poster !== "N/A" && movie.Title !== "Undefined"?
            <MovieCard key={movie.imdbID} poster={movie.Poster} title={movie.Title} year={movie.Year} imdb={movie.imdbID} />
          :<></>})}
    </div>
    <button className='w-full bg-orange-400 h-10 rounded-lg dark:text-gray-900 hover:bg-orange-500' onClick={handleLoadMore} disabled={!movies || currentPage >= Math.ceil(totalResults / 10)}>
        {currentPage >= Math.ceil(totalResults / 10) ? 'No More Results' : 'Load More'}
    </button>
    </>
  )
}

async function fetcher(url) {
    const res = await fetch(url);
    return await res.json();
  }

export default MovieList
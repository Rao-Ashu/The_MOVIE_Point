import axios from 'axios';
const API_KEY = "37d2046b";

const fetchMovies = async (SearchName,page) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${SearchName}&page=${page}&apikey=${API_KEY}`);
    return response.data.Search;
  }

export {fetchMovies};
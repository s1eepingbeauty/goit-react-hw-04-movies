import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = 'e3b066e22b25d00eb414002518baafe2';

const popularMovies = () => {
  const url = `/trending/movie/week?api_key=${apiKey}`;
  return axios
    .get(url)
    .then((results) => results.data.results)
    .catch((error) => console.log(error));
};

const searchMovies = (searchQuery) => {
  const url = `search/movie?query=${encodeURIComponent(searchQuery)}&api_key=${apiKey}`;
  return axios
    .get(url)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
};

const movieDatails = (movieId, endpoint) => {
  let url = `/movie/${movieId}`;
  switch (endpoint) {
    case 'cast':
      url += `/credits?api_key=${apiKey}`;
      break;
    case 'reviews':
      url += `/reviews?api_key=${apiKey}`;
      break;
    default:
      url += `?api_key=${apiKey}`;
      break;
  }
  //console.log(url);
  return axios
    .get(url)
    .then((results) => results.data)
    .catch((error) => console.log(error));
};

export { popularMovies, searchMovies, movieDatails };

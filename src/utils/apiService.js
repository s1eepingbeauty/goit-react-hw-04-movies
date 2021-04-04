import axios from 'axios';
import { PAGES, REQUEST_KEYWORDS} from './CONSTANTS';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  'api_key': 'e3b066e22b25d00eb414002518baafe2',
};

const popularMovies = () => {
  const url = `/trending/movie/week`;
  return axios
    .get(url)
    .then((results) => results.data.results)
    .catch((error) => console.log(error));
};

const searchMovies = (searchQuery) => {
  const url = `search/movie?query=${encodeURIComponent(searchQuery)}`;
  return axios
    .get(url)
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
};

const getMovieDetailsEndpoint = (movieId, endpoint) => {
  switch (endpoint) {
    case REQUEST_KEYWORDS.cast:
      return `${PAGES.movie}${movieId}${PAGES.credits}`;
    case REQUEST_KEYWORDS.reviews:
      return `${PAGES.movie}${movieId}${PAGES.reviews}`;
    default:
      return `${PAGES.movie}${movieId}`;
  }
}

const movieDetails = (url) => {
  return axios
    .get(url)
    .then((results) => results.data)
    .catch((error) => console.log(error));
};

export { popularMovies, searchMovies, getMovieDetailsEndpoint, movieDetails };

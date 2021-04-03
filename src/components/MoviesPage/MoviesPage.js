import { useState, useEffect } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { searchMovies } from '../../utils/apiService.js';
import styles from './styles.module.scss';

const MoviesPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesList, setMoviesList] = useState('');

  const history = useHistory();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  const search = (event) => {
    event.preventDefault();
    history.push({ ...location, search: `query=${inputValue}` });
  };

  useEffect(() => {
    if (searchQuery === null) return;

    searchMovies(searchQuery).then((data) => {
      setMoviesList(
        data.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { page: `/movies${location.search}` },
              }}
            >
              {title}
            </Link>
          </li>
        )),
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className={styles.searchBar}>
      <form onSubmit={search}>
        <label>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </label>
        <input className={styles.searchBtn} type="submit" value="search" />
      </form>
      {{ moviesList } && <ul className={styles.movieList}>{moviesList}</ul>}
    </div>
  );
};
export default MoviesPage;

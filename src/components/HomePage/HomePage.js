import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { popularMovies } from '../../utils/apiService';
import styles from './styles.module.scss';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    popularMovies().then((data) =>
      setMoviesList(
        data.map(({ id, title }) => (
          <li key={id}>
            <Link to={{ pathname: `/movies/${id}`, state: { page: '/' } }}>{title}</Link>
          </li>
        )),
      ),
    );
  }, []);

  return (
    <div className={styles.container}>
      <h1>Popular movies</h1>
      <ul className={styles.movieList}>{moviesList}</ul>
    </div>
  );
};

export default HomePage;

// adult: false
// backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg"
// genre_ids: (4) [28, 12, 14, 878]
// id: 791373
// media_type: "movie"
// original_language: "en"
// original_title: "Zack Snyder's Justice League"
// overview: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
// popularity: 11783.352
// poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"
// release_date: "2021-03-18"
// title: "Zack Snyder's Justice League"
// video: false
// vote_average: 8.7
// vote_count: 3389

import { useState, useEffect } from 'react';
import {
  useHistory,
  useParams,
  useRouteMatch,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { movieDatails } from '../../utils/apiService.js';
import styles from './styles.module.scss';

const MovieDetailsPage = () => {
  const history = useHistory();
  const movieId = useParams().movieId;
  const { url } = useRouteMatch();
  const [movieAbout, setMovieAbout] = useState('');
  const [castList, setCastList] = useState('');
  const [reviewsList, setReviewsList] = useState('');

  useEffect(() => {
    movieDatails(movieId).then(({ poster_path, title, vote_average, overview, genres }) => {
      const img = `https://image.tmdb.org/t/p/w500${poster_path}`;
      const userScore = vote_average * 10;
      const genresList = genres.reduce((genre, { name }) => `${genre} ${name}`, '');
      setMovieAbout({
        img,
        title,
        userScore,
        overview,
        genresList,
      });
    });
    movieDatails(movieId, 'cast').then((data) => {
      const result = data.cast;
      if (result.length === 0) {
        setCastList(<p>There are no information about cast for this movie...</p>);
        return;
      }
      setCastList(
        result.map(({ id, name, profile_path, character }) => {
          let img;
          if (profile_path) {
            img = `https://image.tmdb.org/t/p/w200${profile_path}`;
          } else {
            img = 'https://exceleratelabs.com/wp-content/uploads/2017/08/default-user.png';
          }
          return (
            <li key={id}>
              <img src={img} alt={name} width="200" height="300" />
              <p className="actorName">{name}</p>
              <p className="actorCharacter">Character: {character}</p>
            </li>
          );
        }),
      );
    });

    movieDatails(movieId, 'reviews').then((data) => {
      const result = data.results;
      if (result.length === 0) {
        setReviewsList(<p>There are no reviews for this movie...</p>);
        return;
      }
      setReviewsList(
        result.map(({ id, author_details, content }) => {
          const name = author_details.username;
          const avatar = author_details.avatar_path;
          let img;
          if (avatar) {
            img = `https://image.tmdb.org/t/p/w500${avatar}`;
          } else {
            img = 'https://exceleratelabs.com/wp-content/uploads/2017/08/default-user.png';
          }
          return (
            <li key={id}>
              <img src={img} alt="" width="50" />
              <span className="userName">{name}</span>
              <p className="reviewContent">{content}</p>
            </li>
          );
        }),
      );
    });
  }, [movieId]);

  return (
    <>
      <div>
        <button
          className={styles.backBtn}
          type="button"
          onClick={() => history.push('/')}
        >
          &#129044; Go back
        </button>
      </div>
      <div className={styles.movieContainer}>
        <div className={styles.imgContainer}>
          <img src={movieAbout.img} alt={movieAbout.title} width="250" />
        </div>
        <div className={styles.aboutMovieContainer}>
          <h1>{movieAbout.title}</h1>
          <p className={styles.userScore}>User score: {`${movieAbout.userScore}%`}</p>
          <h2>About</h2>
          <p className={styles.about}>{movieAbout.overview}</p>
          <h3>Genres</h3>
          <p className={styles.genres}>{movieAbout.genresList}</p>
          <div className={styles.info}>
            <h4>Additional information</h4>
            <ul className={styles.infoLinks}>
              <li>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.movieInfoContainer}>
        <Switch>
          <Route path={`${url}/cast`}>
            <Cast castList={castList} />
          </Route>
          <Route path={`${url}/reviews`}>
            <Reviews reviewsList={reviewsList}/>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default MovieDetailsPage;

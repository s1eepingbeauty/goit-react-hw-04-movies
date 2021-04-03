import { lazy, Suspense } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.scss';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const NotFoundView = lazy(() => import('./view/NotFoundView'));

const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            to="/" exact>
            Home
          </NavLink>
          &nbsp;&nbsp;
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path='/goit-react-hw-04-movies'>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;

import { lazy } from 'react';

const Cast = lazy(() => import('./components/Cast'));
const HomePage = lazy(() => import('./components/HomePage'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage'));
const MoviesPage = lazy(() => import('./components/MoviesPage'));
const Reviews = lazy(() => import('./components/Reviews'));

export const routes = [
  {
    path: '/movies/:movieId/cast',
    label: 'Cast',
    component: Cast,
  },
  {
    path: '/',
    label: 'Home Page',
    component: HomePage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/movies/:movieId',
    label: 'Movie Details Page',
    component: MovieDetailsPage,
  },
  {
    path: '/movies',
    label: 'Movies Page',
    component: MoviesPage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/movies/:movieId/reviews',
    label: 'Reviews',
    component: Reviews,
  },
];

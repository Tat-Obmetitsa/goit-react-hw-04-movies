import React, { Suspense, lazy } from 'react';
import s from '../App/App.module.css';
import { Route, Switch } from 'react-router-dom';
import routes from '../../services/routes';

const NotFoundView = lazy(() =>
  import('../../views/NotFoundView/NotFoundView'),
);
const Navigation = lazy(() => import('../Navigation/Navigation'));
const HomePage = lazy(() => import('../../views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../views/MovieDetailsPage/MovieDetailsPage'),
);

const App = () => {
  return (
    <div className={s.container}>
      <Suspense fallback={<div>{/* <Loading /> */}</div>}>
        <Navigation />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;

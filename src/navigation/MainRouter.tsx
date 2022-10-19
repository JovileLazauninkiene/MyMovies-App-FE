import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';
import MovieInfoContainer from 'containers/MovieInfoContainer/MovieInfoContainer';
import { Routes, Route } from 'react-router';

import { RouteKey } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<MovieInfoContainer />} path={RouteKey.Movie} />
      <Route element={<MoviesListContainer />} path={RouteKey.Index} />
      <Route element={<MoviesListContainer />} path={RouteKey.Movies} />
    </Routes>
  );
};

export default MainRouter;

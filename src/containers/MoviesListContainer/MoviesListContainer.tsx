import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovies } from 'api/movies/movies';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import MoviesListFilter from 'containers/MoviesListFiltert/MoviesListFilter';

import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesListContainer.module.css';
// import { getGenres } from 'api/genres/genres';

const MoviesListContainer = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activePage = parseInt(searchParams.get('page') || '1');
  const movieFilter = {
    title: searchParams.get('title') || '',
    genres: searchParams.getAll('genres') || [],
    sort: searchParams.get('sort') || '',
  };

  const { data, isLoading, isFetching } = useQuery(['movies', activePage, movieFilter], () => getMovies(activePage, movieFilter));

  if (isLoading || isFetching) {
    return <Loader />;
  }

  const renderMovies = () => {
    return data?.movies.map((movie) => <MovieCard key={movie.id} {...movie} />);
  };

  const lastPage = data?.totalPages || 0;

  const handlePageClick = (page: number) => {
    setSearchParams({ page: `${page}` });
  };

  return (
    <>
      <MoviesListFilter />
      <div className={styles.movieListContainer}>{renderMovies()}</div>
      <Pagination currentPage={activePage} totalPages={lastPage} onPageClick={handlePageClick} />
    </>
  );
};

export default MoviesListContainer;

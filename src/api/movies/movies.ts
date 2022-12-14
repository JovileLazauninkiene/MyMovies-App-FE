import { MoviesResponse, MovieDetails, MovieFilter } from './types';
import { get } from '../shared/methods';

export async function getMovies(page: number, filter: MovieFilter): Promise<MoviesResponse> {
  const { data } = await get<MoviesResponse>(`movies?page=${page}&title=${filter.title}&genres=${filter.genres}&sort=${filter.sort}`);
  return data;
  console.log(data);
}

export async function getMovie(id: string): Promise<MovieDetails> {
  const { data } = await get<MovieDetails>(`movies/${id}`);
  return data;
}

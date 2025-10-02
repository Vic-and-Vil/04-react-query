
import axios from "axios";
import type { Movie } from "../types/movie";

// опис відповіді API ТУТ, а не в movie.ts
export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const API_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN; // з .env

export async function fetchMovies(
  query: string,
  page: number
): Promise<MoviesResponse> {
  const { data } = await axios.get<MoviesResponse>(API_URL, {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return data;
}

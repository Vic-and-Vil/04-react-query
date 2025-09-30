import axios, { AxiosResponse } from "axios";
import { MoviesResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export async function fetchMovies(query: string, page: number): Promise<MoviesResponse> {
  const response: AxiosResponse<MoviesResponse> = await axios.get(BASE_URL, {
    params: { query, page },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWJlODc5NDNjZjdlOTRlYjM4OWVmMWUxODA3ZDk3OSIsIm5iZiI6MTc1OTI1MTI1MC44NjksInN1YiI6IjY4ZGMwYjMyNTViN2I0MDYxZmM3NzFiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hqLNr-NwPUKeGervSCeqojeGsmakmq-3C0AC1j74AqI`,
    },
  });

  return response.data;
}

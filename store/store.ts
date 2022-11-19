import create from "zustand";

const searchGlobally = async () => {
  const filter = useMoviesStore.getState().filter;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}&query=${filter}`
  );
  const { results } = await response.json();
  useMoviesStore.getState().setMovies(results);
};

export const useMoviesStore = create<{
    movies: any[],
    setMovies: (movies: any[]) => void,
    filteredMovies: any[],
    filter: string,
    setFilter: (filter: string) => void,
    currentMovieId: string,
    setCurrentMovieId: (currentMovieId: string) => void,
    currentMovie: any,
    setCurrentMovie: (currentMovie: any) => void,
    searchGlobally: () => void
      }>((set) => ({
        movies: [],
        setMovies: (movies: any[]) => set(() => ({ movies, filteredMovies: movies })),
        filteredMovies: [],
        filter: "",
        setFilter: (filter: string) => set((state) => ({
          filter,
          filteredMovies: state.movies.filter((movie) => {
            if (movie.title) return movie.title?.toLowerCase().includes(filter.toLowerCase());
            if (movie.name) return movie.name?.toLowerCase().includes(filter.toLowerCase());
          })
        })),
        currentMovieId: "",
        setCurrentMovieId: (currentMovieId: string) => set(() => ({currentMovieId})),
        currentMovie: {},
        setCurrentMovie: (currentMovie: any) => set(() => ({currentMovie})),
        searchGlobally: searchGlobally
      }));
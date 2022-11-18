import create from "zustand";

export const useMoviesStore = create<{
    movies: any[],
    setMovies: (movies: any[]) => void,
    filteredMovies: any[],
    filter: string,
    setFilter: (filter: string) => void,
    currentMovieId: string,
    setCurrentMovieId: (currentMovieId: string) => void
}>((set) => ({
    movies: [],
    setMovies: (movies: any[]) => set(() => ({ movies, filteredMovies: movies })),
    filteredMovies: [],
    filter: "",
    setFilter: (filter: string) => set((state) => ({
        filter,
        filteredMovies: state.movies.filter((movie) => {
            if (movie.title) return movie.title?.toLowerCase().includes(filter.toLowerCase())
            if (movie.name) return movie.name?.toLowerCase().includes(filter.toLowerCase())
        })
    })),
    currentMovieId: "",
    setCurrentMovieId: (currentMovieId: string) => set(() => ({currentMovieId}))
}))
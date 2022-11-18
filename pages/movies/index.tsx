import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import { useMoviesStore } from "../../store/store";

const Movies = ({ movies }: { movies: any[] }) => {
    const { filter, filteredMovies, setFilter } = useMoviesStore()

    useEffect(() => {
        useMoviesStore.getState().setMovies(movies)
    }, [movies])

    // console.log(movies)

    return (
        <div>
            <div className="mb-12 flex items-center justify-between">
                <input
                    onChange={(e) => setFilter(e.target.value.trim().toLowerCase())}
                    type="search"
                    value={filter}
                    className="block p-4 pl-10 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search..."
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {movies ? (
                    filteredMovies.map((movie: any) => {
                    const { id, title, overview, poster_path } = movie;
                    return (
                        <MovieCard
                            key={id}
                            title={title}
                            overview={overview}
                            poster_path={
                                "https://image.tmdb.org/t/p/original" + poster_path
                            }
                        />
                        );
                    })
                ) : (
                    <h4>No Movie Found</h4>
                )}
            </div>
        </div>
    )

}

export async function getServerSideProps() {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_KEY}`
    )
    const { results } = await response.json()
    useMoviesStore.getState().setMovies(results)
    return {
        props: {
            movies: useMoviesStore.getState().movies,
        },
    };
}

export default Movies
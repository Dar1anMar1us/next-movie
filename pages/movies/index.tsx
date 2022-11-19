import { useEffect, useMemo } from "react";
import MovieCard from "../../components/MovieCard";
import { useMoviesStore } from "../../store/store";

const Movies = ({ movies }: { movies: any[] }) => {
  const { filter, filteredMovies, setFilter, searchGlobally } = useMoviesStore();

  useEffect(() => {
    if(filter.length === 0) useMoviesStore.getState().setMovies(movies);
  }, [filter]);

  return (
    <div>
      <div className="mb-12 flex items-center justify-between">
        <input
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
          type="search"
          value={filter}
          className="block p-4 pl-10 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500"
          placeholder="Search..."
        />
        <button onClick={() => filter.length && searchGlobally()} type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                    Search globally
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {filteredMovies ? (
          filteredMovies.map((movie: any) => {
            const { id, title, name, overview, poster_path } = movie;
            return (
              <MovieCard
                key={id}
                movieId={id}
                title={title ? title : name}
                overview={overview}
                poster_path={
                  `https://image.tmdb.org/t/p/original${poster_path}`
                }
              />
            );
          })
        ) : (
          <h4>No Movie Found</h4>
        )}
      </div>
    </div>
  );

};

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}`
  );
  const { results } = await response.json();
  useMoviesStore.getState().setMovies(results);
  return {
    props: {
      movies: useMoviesStore.getState().movies,
    },
  };
}

export default Movies;
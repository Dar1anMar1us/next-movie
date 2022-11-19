import Link from "next/link";
import { FC } from "react";
import { useMoviesStore } from "../store/store";
import cardStyles from "./../styles/MovieCard.module.css";

interface MovieCardProps {
    poster_path: string;
    overview: string;
    title: string;
    movieId: string;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { poster_path, overview, title, movieId } = props;

  const slug = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .join("-");

  return (
    <Link href={`/movies/${movieId}`} onClick={() => useMoviesStore.getState().setCurrentMovieId(movieId)} className={cardStyles.cardLink}>
      <div className="max-w-sm bg-white mx-auto rounded-lg border border-gray-200 shadow-md hover:-translate-y-4 duration-200 hover:animate-pulse">
        <img
          src={poster_path}
          alt={title}
          className="rounded-t-lg h-80 w-full object-cover object-center"
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          <p className={cardStyles.cardDescription}>
            {overview}
          </p>

        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
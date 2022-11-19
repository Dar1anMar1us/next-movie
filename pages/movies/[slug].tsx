import { useMoviesStore } from "../../store/store"


const Movie = ({ movie }: { movie: any }) => {
    console.log(movie)
    return (
        <>
            Hello
            <h2>{useMoviesStore.getState().currentMovieId}</h2>
        </>
    )
}

export async function getServerSideProps({params}: any) {
    const movie_id = useMoviesStore.getState().currentMovieId
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.slug}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    )
    useMoviesStore.getState().setCurrentMovie(await response.json())
    return {
        props: {
            movie: useMoviesStore.getState().currentMovie,
        },
    };
}

export default Movie
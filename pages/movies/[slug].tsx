import { useMoviesStore } from "../../store/store"


const Movie = () => {
    return (
        <>
            Hello
            <h2>{useMoviesStore.getState().currentMovieId}</h2>
        </>
    )
}

export default Movie
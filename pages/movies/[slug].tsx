import Image from "next/image"
import Meta from "../../components/Meta"
import { useMoviesStore } from "../../store/store"


const Movie = ({ movie }: { movie: any }) => {
    const { genres, title, tagline, backdrop_path, release_date, overview } = movie
    console.log(movie)
    return (
        <>
            <div className="container max-w-4xl mx-auto pt-6">
                <Meta title={`NextJS Movies App | ${title}`} keywords={() => genres.map((keyword: any) => keyword.name)}  description={title}/>
                <div className="px-3">
                    <Image src={`https://image.tmdb.org/t/p/original${backdrop_path}`} width={1000} height={600} unoptimized className="rounded-md" alt={title} />
                    <h1 className="font-bold text-xl my-2">{title} <small>({tagline})</small></h1>
                    <p className="text-gray-600 text-sm mt-4">{overview}</p>
                    <p className="mt-5 text-gray-600 text-sm">Genres: <span className="font-bold">{genres.map((genre: any) => genre.name).join(', ')}</span></p>
                    <p className="text-gray-600 text-sm">Release Date: <span className="font-bold">{release_date}</span></p>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({params}: any) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.slug}?api_key=${process.env.NEXT_PUBLIC_MOVIE_KEY}&language=en-US`
    )
    useMoviesStore.getState().setCurrentMovie(await response.json())
    return {
        props: {
            movie: useMoviesStore.getState().currentMovie,
        },
    };
}

export default Movie
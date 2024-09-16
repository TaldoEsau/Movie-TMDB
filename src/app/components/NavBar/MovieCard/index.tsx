import { Movie } from "@/app/Type/movie";

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {

    const movie = props.movie;

    return (
        <li className="bg-green-500 m-3 rounded-lg ">
            <img className="rounded-t" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
            <div className="bg-white font-extrabold text-xl text-red-500 flex justify-center">
                {movie.title}
            </div>


            <div className=" text-left m-2">
                {movie.overview}
            </div >

            <div className="flex justify-end items-end">
                Rating: {movie.vote_average}
            </div>


        </li>

    );
}
import { Movie } from "@/app/Type/movie";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";



export default function MovieList() {

    const [movie, setMovie] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/movie/upcoming',
            params: {
                api_key: 'c5962a1c51887ce7e4bd21194fa74d32',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovie(response.data.results)
        })
    }

    getMovies();

    return (
        <ul className="
       grid grid-cols-5 p-3  bg-red-600 ">
            {movie.map((movie) =>
                <MovieCard
                    key={movie.id}
                    movie={movie} />
            )}
        </ul>
    );
}
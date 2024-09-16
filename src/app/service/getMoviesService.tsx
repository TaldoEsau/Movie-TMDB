import API from "@/config/API";
import {AxiosResponse} from "axios";
import { IMovieList, IResponse, Movie } from "../Type/movie";

//? Get the list of movies
export const getMoviesService = (query: string, movieType: string, signal: AbortSignal): Promise<AxiosResponse<IResponse<ReadonlyArray<IMovieList>>>> => {
    return API.get<IResponse<ReadonlyArray<IMovieList>>>(`/?apikey=${process.env.NEXT_APP_API_KEY}&s=${query}${movieType !== "all" ? `&type=${movieType}` : ""}`, {
        signal
    });
};

//? Get a single movie
export const getMovieService = (imdbId: string): Promise<AxiosResponse<Movie>> => {
    return API.get<Movie>(`/?apikey=${process.env.NEXT_APP_API_KEY}&i=${imdbId}`);
};

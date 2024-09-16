export interface Movie {
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number,
}

interface IResponse<M> {
    Response: string;
    Search: M;
    totalResults: string;
}


interface IMovieList extends Pick<IMovie, "Poster" | "Title" | "Type" | "Year" | "imdbID"> {}

type MOVIE_TYPE = "all" | "movie" | "series" | "episode";

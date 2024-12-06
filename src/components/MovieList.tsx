import React from "react";
import { Movie } from "../types/Movie.ts";
import MovieCard from "./MovieCard.tsx";

// Definir los props con la interfaz de Movie (Los props son las propiedades del componente que importamos en este caso el componente de peliculas, las propiedades son id, title, genere e imagen)
interface MovieListProps{
    movies: Movie[]; 
}

const MovieList: React.FC<MovieListProps> = ({movies}) => {
    return (
        <div className="movie-list">
            {/* Iteramos sobre las peliculas y se crea una tarjeta de cada pelicula */}
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
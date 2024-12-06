import React from "react";
import Swal from "sweetalert2";
import { Movie } from "../types/Movie";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    // Definir la ruta para importar la imágen basada en el titulo
    const imageSrc = new URL (`../assets/img/${movie.image}`, import.meta.url).href;// Import es palabra reservada de react que sirve para importar un archivo, meta es un modulo y url es una función que sirve para obtener la ruta de un archivo, el href indica que es la ruta anterior.

    // Crear la ventana emergente 
    const showDetails = () => {
        Swal.fire({
            title: movie.title,
            text: `Genereo: ${movie.genere}`,
            imageUrl: imageSrc,
            imageWidth: 300,
            imageAlt:`${movie.title} Poster`,
            confirmButtonText: "Excelente",
        });
    };

    return (
        <div className="movie-card" onClick={showDetails}>
            <img src={imageSrc} alt={movie.title} className="movie-image" />
            <h3>{movie.title}</h3>
            <p>{movie.genere}</p>
        </div>
    );
};

export default MovieCard;

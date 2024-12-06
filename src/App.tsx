import React from 'react';
import {useState} from 'react'; // El estado en Typescript se refiere a la información que se puede cambiar en un componente, es decir la que nosotros ingresamos.
import './App.css';
import MovieList from './components/MovieList.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => { // Es un elemento reservado que sirve para inicializar un proyecto de React y renderizar todas las vistas, es como un array de los componentes
  const [movies] = useState([
    {
      id: 1,
      title: "Pulp Fiction",
      genere: "Acción",
      image: "Peliculas-de-quentin-tarantino-Pulp-Fiction.jpg"
    }, 
    {
      id: 2,
      title: "Los odiosos Ocho",
      genere: "Acción",
      image: "Peliculas-de-quentin-tarantino-Los-Odiosos-Ocho-1024x575.jpg"
    },
    {
      id: 3,
      title: "Kill Bill",
      genere: "Acción",
      image: "1366_2000.jpeg"
    },
    {
      id: 4,
      title: "Django Sin Cadenas",
      genere: "Acción",
      image: "Django.jpg"
    }, 
    {
      id: 5,
      title: "Bastardos sin Gloria",
      genere: "Acción",
      image: "Bastardos-Sin-Gloria.jpg"
    }, 
    {
      id: 6,
      title: "Jackie Brown",
      genere: "Drama",
      image: "Jackie-Brown.jpg"
    },
    {
      id: 7,
      title: "Reservoir Dogs",
      genere: "Crimen",
      image: "Reservoir-Dogs.jpg"
    }, 
    {
      id: 8,
      title: "Érase una vez en Hollywood",
      genere: "Drama",
      image: "Erase-una-vez-en-Hollywood.jpg"
    }, 
    {
      id: 9,
      title: "Death Proof",
      genere: "Terror",
      image: "Death-Proof.jpg"
    }
  ]);
  return (
    <div className="app-container">
      <h1 className="app-title">🎬 Movie List 🎬</h1>
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
};

export default App;
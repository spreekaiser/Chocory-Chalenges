import React from 'react';
import './Movies.css';

import { movies } from '../../Data/movies';
import MovieCard from '../MovieCard/MovieCard.js';

export default function Movies() {
    console.log('Movies: ', movies);
    return (
        <main className='movies'>
            <h1 className='movies__title'>Some great movies</h1>
            <section className='movies__movies'>
                {movies.map((movie, index) => {
                    return <MovieCard key={index} movie={movie} />;
                })}
            </section>
        </main>
    );
}

# React with Array - Demo

This is the ending point of the code for the demo in Class.

## Goal.

We want to display movies card without repeating code.

For this, we'll need to create different component.

-   movieCards

## To run this project

`npm start`

## Movie Component

```js
import MovieCard from '../MovieCard/MovieCard.js';

export default function Movies() {
    return (
        <main className='movies'>
            <h1 className='movies__title'>Some great movies</h1>
            <section className='movies__movies'>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        name={movie.title}
                        director={movie.director}
                        rating={movie.imdbRating}
                        image={movie.url}
                        plot={movie.description}
                    />
                ))}
            </section>
        </main>
    );
}
```

## MovieCard Component

```js
import './MovieCard.css';

export default function MovieCard({ name, image, plot, rating, director }) {
    console.log(name);
    return (
        <section className='movie-card'>
            <h2 className='movie-card__title'>
                {name}
                <span className='movie-card__rating'>{rating} IMDb</span>
            </h2>
            <span className='movie-card__director'>by {director}</span>
            <img className='movie-card__image' src={image} alt={name} />
            <div className='movie-card__content'>
                <p className='movie-card__description'>{plot}</p>
            </div>
        </section>
    );
}
```

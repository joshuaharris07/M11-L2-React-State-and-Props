import React, { useState } from 'react';

const MoviesList = () => {

    const [movies, setMovies] = useState([
        { id: 1, title: 'The Lord of the Rings', genre: 'Action', description: 'Brief description' },
        { id: 2, title: 'The Dark Knight', genre: 'Action', description: 'Brief description' },
        { id: 3, title: 'What About Bob?', genre: 'Comedy', description: 'Brief description' },
        { id: 4, title: 'Star Wars', genre: 'Action', description: 'Brief description' },
        { id: 5, title: 'CIA', genre: 'Comedy', description: 'Brief description' },
    ]);

    const toggleDetails = (id) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, showDetails: !movie.showDetails } : movie
            )
        );
    };

    const removeMovie = (id) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    }

    const [viewAll, setViewAll] = useState(true)

    const filteredMovies = viewAll ? movies : movies.filter((movie) => movie.genre === 'Action');

    return (
        <div>
            <h1>Movie List</h1>
            <button onClick={() => setViewAll(!viewAll)}>
                {viewAll ? 'Show All Movies' : 'Show Action Movies'}
            </button>
            {/* Toggle view button */}

            <ul>
                {filteredMovies.map((movie) => (
                    <li key={movie.id}>
                        <span onClick={() => toggleDetails(movie.id)}>
                            {movie.title}
                        </span>
                        {movie.showDetails && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
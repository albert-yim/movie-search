import React from 'react';

import './card.styles.css'

export const Card = (props) => (
    <div className = 'card-container'>
        <img
        alt = 'movie-poster'
        className = 'card-image'    
        src = {`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
        />
        <h1> {props.movie.title}</h1>
        <p>{props.movie.overview}</p>
    </div>
);
    

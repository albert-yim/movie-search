import React from 'react';
import './card-list.syles.css'

import {Card} from '../card/card.component'

export const CardList = props => (
    <div className = 'card-list'>
        {
            props.movies.map(movie => (
            <Card key = {movie.id} movie = {movie}/>
            ))
        }
    </div>
)
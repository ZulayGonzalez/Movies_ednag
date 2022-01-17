import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UseContext from '../UseContext';
import "../Card.css"
// import { Link, Route } from "react-router-dom";
//import UseContext from './UseContext'
import DetalleMovie from './CardDetalle';
// import { getValue } from '@testing-library/user-event/dist/utils';

const Card = ({ movie }) => {

    const useMovieContext = useContext(UseContext)
    const { setMovie } = useMovieContext;

    const handleMovie = (movie) => {
        setMovie(movie)
    }

    return (
        <>


            <div className="container-fluid">
                <div className="row">



                    <div class="card">
                        <a href="#">
                            <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{movie.title}</h5>

                                <p class="card-text"><small class="text-muted"><i class="fas fa-calendar-alt"></i>{movie.release_date}</small></p>
                                <Link to="/detalle-page" onClick={() => handleMovie(movie)}>
                                    Detalle
                                </Link>
                            </div>
                        </a>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Card
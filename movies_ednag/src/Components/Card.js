import React, { useContext } from 'react';
import { Link, Route } from "react-router-dom";


import UseContext from './UseContext'
import DetalleMovie from './DetalleMovie';
import { getValue } from '@testing-library/user-event/dist/utils';

const Card = ({ movie }) => {


    // const { setMovie } = useContext

    // const handleMovie = (movie) => {
    //     setMovie(movie)
    // }


    return (
        <>


            <div className="container-fluid">
                <div className="row">

                    <div className="col-sd-3 card" >
                        <img
                            src={movie.backdrop_path}
                            height={150} width={150}
                        />
                        <h3>
                            {movie.title}
                        </h3>
                        <h3>
                            {movie.release_date}
                        </h3>

                        <p>

                            <button >
                                Detalle
                            </button>

                        </p>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Card
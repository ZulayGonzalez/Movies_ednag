import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import UseContext from '../UseContext';




const CardDetalle = ({ movie }) => {


    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-sd-3 card" >
                    <img
                        src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path}
                        height={150} width={150}
                    />
                    <h3>
                        {movie.title}
                    </h3>
                    <h3>
                        {movie.genre_ids}
                    </h3>
                    <h3>
                        {movie.release_date}
                    </h3>
                    <h3>
                        {movie.overview}
                    </h3>

                    <p>

                        <Link to="/" >
                            Atras
                        </Link>

                    </p>
                </div>


            </div>

        </div>



    )
}

export default CardDetalle

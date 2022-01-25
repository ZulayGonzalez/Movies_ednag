import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import UseContext from '../UseContext';
import "../Detalle.css";



const CardDetalle = ({ movie }) => {
    const movies = useContext(UseContext);
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-4">
                    <h4 className="text-center" style={{ background: "white", color: "black" }}>

                        <ul>{movie.length > 0 && movie.map((value, key) => (

                            <li>{value.genero}</li>
                        ))}
                        </ul>
                    </h4>
                    <hr />
                    <div className="profile-card-6"><img src="card-img-top" src={`https://image.tmdb.org/t/p/w500/` + movie.img} alt="Card image cap" />
                        <div className="profile-name">{movie.title}
                            <br /></div>
                        <div className="profile-position">{movie.date}</div>
                        <div className="profile-overview">
                            <div className="profile-overview">
                                <div className="row text-center">
                                    <div className="col-xs-4">
                                        <h3> Actores</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default CardDetalle

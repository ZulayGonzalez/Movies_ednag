import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import UseContext from '../UseContext';
import "../Detalle.css";



const CardDetalle = ({ movie, genero }) => {
    const movies = useContext(UseContext);
    console.log("genero en la card", genero)

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-4">
                    <h4 className="text-center" style={{ background: "white", color: "black" }}>

                        <ul>{(genero.length > 0 && movie.genre_ids) && movie.genre_ids.map((id) => genero.filter((item) => parseInt(item.id) === parseInt(id)).map((j) => <li>{j.name}</li>))}</ul>

                        {/* <ul>{genero.length > 0 && genero.map((item) => <li key={item.id}>{item.name}</li>)}</ul> */}

                    </h4>
                    <hr />
                    <div className="profile-card-6"><img src="card-img-top" src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path} alt="Card image cap" />
                        <div className="profile-name">{movie.title}
                            <br /></div>
                        <div className="profile-position">{movie.release_date}</div>
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

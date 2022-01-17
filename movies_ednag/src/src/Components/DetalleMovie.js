import React, { useContext } from 'react'
import UseContext from './UseContext'
import { Link } from "react-router-dom";



const DetalleMovie = () => {
    const {movie} = useContext(UseContext);
        
    return (
        <>

<div class="container-fluid">
            {<div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8" style={{ border: "1px solid #d0d0d0", marginTop: "100px" }}>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-6" style={{ border: "1px solid #d0d0d0" }}>
                                        <img alt="Vista previa de la imagen del personaje" src={movie.image} />
                                        </div>
                                        <div class="col-md-6" style={{ border: "1px solid #d0d0d0" }}>
                                            <dl>
                                                <dt>

                                                    Titulo de la pelicula:

                                                </dt>
                                                <dd>
                                                    {movie.title}
                                                </dd>
                                                <dt>
                                                    Genero:
                                                </dt>
                                                <dd>
                                                    {movie.genre}
                                                </dd>

                                                <dt>
                                                    Año de publicacion:
                                                </dt>
                                                <dd>
                                                    {/* {movie.ano} */}
                                                </dd>
                                                <dt>
                                                    Actores:
                                                </dt>
                                                <dd>
                                                    {/* {movie.actores} */}
                                                </dd>

                                            </dl>
                                            <Link to="/inicialPage" >
                                                Atras
                                            </Link>


                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">

                        </div>
                    </div>
                </div>
            </div>}
        </div>






        </>
    )
}

export default DetalleMovie

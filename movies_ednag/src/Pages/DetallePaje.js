import React, { useContext, useEffect, useState } from 'react'
import CardDetalle from '../Components/CardDetalle'
import DetalleMovie from '../Components/CardDetalle'
import Titulo from '../Components/Titulo'
import UseContext from '../UseContext'
import Axios from "axios";
import "../Detalle.css";

const DetallePaje = () => {
    const movies = useContext(UseContext)
    const { movie } = movies
    const [genero, setGenero] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(movies)

    useEffect(() => {
        setLoading(true)
        Axios.get(

            `https://api.themoviedb.org/3/genre/movie/list?api_key=dce6b909b6d767d7dfa7728cc3974829`

        )
            .then((response) => {
                setGenero(response.data.genres);
                console.log("hola estos son los generos", response.data.genres);
            })
            .catch((error) => {
                console.log(error);
            }
            ).finally(
                setLoading(false)
            );
    }, []);

    if (loading) return (<p>buscando generos</p>)
    return (
        <>
            <Titulo titulo={"detalle"} url={"/"} />
            <div className="col-md-12">
                <div className="row">


                    <div className="col-md-4">

                        <CardDetalle movie={movie} genero={genero} />
                    </div>



                </div>
            </div>


        </>
    )
}

export default DetallePaje
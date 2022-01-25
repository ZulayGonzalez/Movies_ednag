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

    return (
        <>
            <Titulo titulo={"detalle"} url={"/"} />
            <div className="col-md-12">
                <div className="row">


                    <div className="col-md-4">

                        <CardDetalle movie={movie} />
                    </div>



                </div>
            </div>


        </>
    )
}

export default DetallePaje
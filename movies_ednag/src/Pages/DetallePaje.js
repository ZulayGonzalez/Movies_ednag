import React, { useContext } from 'react'
import CardDetalle from '../Components/CardDetalle'
import DetalleMovie from '../Components/CardDetalle'
import Titulo from '../Components/Titulo'
import UseContext from '../UseContext'

const DetallePaje = () => {
    const movies = useContext(UseContext)
    const { movie } = movies

    console.log(movies)
    return (
        <>
            <Titulo titulo={"detalle"} url={"/"} />
            <div className="col-md-12">
                <div className="row">


                    <div class="col-md-4">
                        <CardDetalle movie={movie} />
                    </div>



                </div>
            </div>


        </>
    )
}

export default DetallePaje
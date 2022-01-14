import React, { useContext } from 'react'
import DetalleMovie from '../Components/DetalleMovie'
import UseContext from '../Components/UseContext'

const DetallePaje = () => {
    const movieContext= useContext(UseContext)
    const {setMovie}= movieContext


    return (
        <>
            <div className="col-md-12">
            <div className="row">
                <h3 className="text-center">
                    Titulo Pagina Detalle
                </h3>
                <div className="row">

                <div className="col-md-8 card">
                    <DetalleMovie/>
                    </div>
                </div>
                </div>
                </div>
               

        </>
    )
}

export default DetallePaje

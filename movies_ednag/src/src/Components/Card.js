import React, { useContext } from 'react';
import { Link, Route } from "react-router-dom";
import "./Card.css"
import UseContext from './UseContext'
import DetalleMovie from './DetalleMovie'

const Card = () => {

    const movieContext= useContext(UseContext)
const {setMovie}= movieContext

const handleMovie=(movie)=>{
    setMovie(movie)
}

	
	return (
		<>
     <Route exact path="/detalleMovie" component={<DetalleMovie />} />,

			<div className="container-fluid">
             <div className="row">
			 
                    <div key={movie.id}  className="col-sd-3 card" >
					<img
                            src={movie.image}
                            height={150} width={150}
                        />
                        <h3>
                           {movie.title}
                        </h3>
						<h3>
                           {movie}Año
                        </h3>
                       
                        <p>

                            <Link to="/detalleMovie" onClick={()=> handleMovie(movie)}>
                                Detalle
                            </Link>

                        </p>
                    </div>
               
                
            </div>

      		  </div>

		</>
	)
}

export default Card

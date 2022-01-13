import React from 'react'
import "./Card.css"
const CardPage = () => {
	return (
		<>

			<div className="col-md-2">
			</div>
			<div className="col-md-8">
				<div className="row">

					<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />

				</div>
				<h3>
					Titulo Pelicula
				</h3>
				<dl>
					<dt>
						Genero
					</dt>
					<dt>
						Año de publicacion
					</dt>
					<dt>
						Actores
					</dt>
				</dl>
				<div className="row">
					<div className="col-md-3">
					</div>
					<div className="col-md-3">
					</div>
					<div className="col-md-3">
					</div>
					<div className="col-md-3">

						<button type="button" className="btn btn-sm btn-outline-secondary btn-block">
							Ver mas
						</button>
					</div>
				</div>
			</div>
			<div className="col-md-2">


			</div>









		</>
	)
}

export default CardPage

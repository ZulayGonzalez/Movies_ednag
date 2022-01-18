import React from 'react'

const Titulo = ({ titulo, url }) => {
    console.log(titulo)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron">
                        <h2>
                            {titulo}
                        </h2>

                        
                            <button className="btn btn-primary btn-large" href={url}>ir</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Titulo

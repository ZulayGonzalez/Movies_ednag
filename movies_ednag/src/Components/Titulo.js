import React from 'react'

const Titulo = ({ titulo, url }) => {
    console.log(titulo)
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="jumbotron">
                        <h2>
                            {titulo}
                        </h2>
                      
                        <p>
                            <a class="btn btn-primary btn-large" href={url}>ir</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Titulo

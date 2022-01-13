import React from 'react'
import CardPage from './CardPage'

const InicialPage = () => {
    return (
        <>


            <div className="col-md-12">
                <h3 className="text-center">
                    Titulo Pagina Inicial
                </h3>

                <div className="row">
                    <div className="col-md-4 card">
                        <CardPage />
                    </div>
                    <div className="col-md-4 card">
                        <CardPage />
                    </div>
                    <div className="col-md-4 card">
                        <CardPage />
                    </div>
                </div>





                <nav className="pagination-sm">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>

                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default InicialPage

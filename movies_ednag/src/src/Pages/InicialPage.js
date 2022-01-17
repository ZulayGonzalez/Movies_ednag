import React from 'react'
import  Card from '../Components/Card'

const InicialPage = () => {
    const movieContext= useContext(UseContext)
    const {setMovie}= movieContext

    	// const [list, setList] = useState({});

    // useEffect(() => {
    //     Axios({
    //         url: "...",
    //     })
    //         .then((response) => {
    //             // setList(response.data.results);
    //             // console.log(response.data.results);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);


    return (
        <>


            <div className="col-md-12">
            <div className="row">
                <h3 className="text-center">
                    Titulo Pagina Inicial
                </h3>
                <div className="row">
                { list.length > 0 && list.map((movie) => (
                
                    <div className="col-md-4 card">
                    <Card />
                    </div>
               
                    ))}
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

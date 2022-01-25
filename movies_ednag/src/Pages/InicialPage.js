import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import Axios from "axios";
import UseContext from '../UseContext'
import Titulo from '../Components/Titulo';
// import "../Card.css";
const InicialPage = () => {

    const [movies, setMovies] = useState([]);
    const [cont, setcont] = useState(1)
    useEffect(() => {
        Axios.get
            // fetch
            (
                `http://127.0.0.1:4000/upcoming`
            )
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
        []
    );
    const nextPage = () => {
        setcont(cont + 1)
    }
  

 

    return (
        <div className="container-fluid">
            <Titulo titulo={"principal"} url={"/"} />
            <div className="row">
                {movies.length > 0 && movies.map((value, key) => (

                    <>
                    
                    <p style={{ color: 'white' }}>{value.title}</p>
                    
                    { value.gener.map((genero, key) => (
                        <p style={{ color: 'red' }}>{genero}</p>
                        // <div key={key} className="col-md-4">
                        //     <Card movie={value} />
                        // </div>
                    ))}
                    </>
                ))}
            </div>
            {/* <ul className="pagination">
                <button onClick={() => nextPage()}>next</button>
            </ul> */}
        </div>
    )
}

export default InicialPage

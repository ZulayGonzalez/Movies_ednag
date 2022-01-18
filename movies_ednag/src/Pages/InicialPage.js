import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import Axios from "axios";
import UseContext from '../UseContext'
import Titulo from '../Components/Titulo';
import "../Card.css"


const InicialPage = () => {

    const [movies, setMovies] = useState({});

    const [cont, setcont] = useState(4)

    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/3/list/${cont}?api_key=dce6b909b6d767d7dfa7728cc3974829`
        )
            .then((response) => {
                setMovies(response.data.items);
                console.log(response.data.items);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [cont]);


    const nextPage = () => {
        setcont(cont + 1)
    }



    return (

        <div className="container-fluid">
            <Titulo titulo={"principal"} url={"/"} />

            <div className="row">
                {movies.length > 0 && movies.map((value, key) => (

                    <div key={key} className="col-md-4">
                        <Card movie={value} />
                    </div>


                ))}

            </div>

            <ul className="pagination">


                <button onClick={() => nextPage()}>next</button>




            </ul>
        </div>







    )
}

export default InicialPage

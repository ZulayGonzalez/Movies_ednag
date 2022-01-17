import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import Axios from "axios";
import UseContext from '../UseContext'
import Titulo from '../Components/Titulo';



const InicialPage = () => {

    const [movies, setMovies] = useState({});

    const [cont, setcont] = useState(4)

    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/4/list/${cont}?api_key=dce6b909b6d767d7dfa7728cc3974829`
        )
            .then((response) => {
                setMovies(response.data.results);
                console.log(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [cont]);


    const nextPage = () => {
        setcont(cont + 1)
    }



    return (

        <div class="container-fluid">
            <Titulo titulo={"principal"} url={"/"} />

            <div class="row">
                {movies.length > 0 && movies.map((value, key) => (

                    <div class="col-md-4">
                        <Card movie={value} />
                    </div>


                ))}

            </div>

            <ul class="pagination">


                <li><a href="javascript:void(0)" onClick={() => nextPage()}>next</a></li>




            </ul>
        </div>







    )
}

export default InicialPage

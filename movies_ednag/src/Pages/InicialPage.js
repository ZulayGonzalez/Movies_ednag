import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import Axios from "axios";
import UseContext from '../Components/UseContext'


const InicialPage = () => {

    // const useMovieContext= useContext(UseContext)
    // const {mov}=useMovieContext;

    const [movies, setMovies] = useState({});

    useEffect(() => {
        Axios.get(
            "https://api.themoviedb.org/4/list/1?api_key=dce6b909b6d767d7dfa7728cc3974829"
        )
            .then((response) => {
                setMovies(response.data.results);
                console.log(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <div clasname="container-fluid">
                <div clasname="row">
                    <div clasname="col-md-12">
                        <div clasname="jumbotron card card-block">
                            <h2>
                                Movies Ednag
                            </h2>
                        </div>



                        <div clasname="row">
                            {movies.length > 0 && movies.map((value) => (
                                <>

                                    <div clasname="col-md-4">
                                        <h3>
                                           <Card movie={value} />
                                        </h3>
                                    </div>


                                </>
                            ))}


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default InicialPage

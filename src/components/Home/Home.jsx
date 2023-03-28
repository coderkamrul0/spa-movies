import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';

const Home = ({handleWatchTime}) => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data =>setMovies(data))
    },[])

    return (
        <div className='pr-16'>
            <div className='grid grid-cols-3 gap-5'>
            {
                movies.map(movie => <SingleMovie movie={movie} key={movie.movieName} handleWatchTime={handleWatchTime}></SingleMovie>)
            }
            </div>
        </div>
    );
};

export default Home;
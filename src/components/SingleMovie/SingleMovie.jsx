import React from 'react';

const SingleMovie = (props) => {
    const {poster,movieName,description,watchTime,imdbRating} = props.movie
    const {handleWatchTime} = props;
    
    
    
    return (
        <div className='shadow-2xl p-5 flex flex-col justify-between rounded-lg'>
            <div className='w-40 mx-auto'>
            <img src={poster} alt="" />
            </div>
            <h3 className='text-2xl font-bold text-center py-3'>{movieName}</h3>
            <p className='text-xl text-center'>{description}</p>
            <div className='flex justify-around py-3 text-xl'>
                <p> Watch Time: <span className='text-orange-600'>{watchTime}</span></p>
                <p>Rating: <span className='text-yellow-500'>{imdbRating}</span>
                </p>
            </div>
            <div className='text-center'>
            <button onClick={() => handleWatchTime(watchTime)}  className='bg-green-500 px-4 py-4 text-lg text-white rounded-lg'>Add Watchlist</button>
            </div>
            
        </div>
    );
};

export default SingleMovie;
import React from 'react'
import { NavLink } from 'react-router-dom';

const MovieCard = ({ currMovie }) => {

    const { Poster, imdbID } = currMovie;

    return (
        <>
            <li className='w-50 h-60 container flex flex-col shadow-md justify-center items-center mt-4'>

                <div className="imgContainer w-auto h-auto">
                    <img src={Poster} alt={imdbID} className='w-50 h-60' />
                </div>
                <div className="buttonContainer mt-1">
                    <NavLink to={`/movie/${imdbID}`}>
                    <button className='w-50 h-auto p-2 bg-blue-500 hover:bg-blue-800  text-white cursor-pointer'> Watch Now </button>
                    </NavLink>
                </div>
            </li>

        </>
    )
}

export default MovieCard;

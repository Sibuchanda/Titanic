import React from 'react'
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';


const Movie = () => {

 const movieData = useLoaderData();
//  console.log(movieData);


  return (
   <>
   <div className="container w-screen h-auto flex items-center justify-center bg-blue-100">
   <ul className='w-auto h-auto bg-blue-100 grid grid-cols-4 mt-6 gap-14'>

    {
      movieData && movieData.Search.map((currMovie)=>{
        return <MovieCard key={currMovie.imdbID} currMovie={currMovie} />
      })


    }

   </ul>
   </div>
   </>
  )
}

export default Movie;

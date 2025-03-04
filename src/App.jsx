import { useState } from 'react'
import AppLayout from './components/AppLayout';
import Movie from './components/Movie';
import About from './components/About';
import getMovieData from './components/api/FetchMovieData';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  
  const router = createBrowserRouter([

    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/movie',
          element: <Movie/>,
          loader: getMovieData,
          
        },
        {
          path: '/about',
          element: <About/>,
        },
      ]
    }
  ]);


  return <RouterProvider router={router}/>
}

export default App

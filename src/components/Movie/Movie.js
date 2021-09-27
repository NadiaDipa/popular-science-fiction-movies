import React, {useState, useEffect } from 'react';
import MovieName from '../MovieName/MovieName';

import './Movie.css'

const Movie = () => {
            const [movies, setMovies] = useState([]);
            const [cart, setCart] = useState([]);
                useEffect (() =>{
                    fetch('./movies.JSON')
                    .then(rest => rest.json())
                    .then(data => setMovies(data))
                } ,[])

            // event handling
            const handleAddToCart = (movie) => {
               const newCart = [...cart, movie];
               setCart(newCart);
            }

            // total 
            let total = 0;
            for(const movie of cart){
                total = total + movie.boxOffice;
                
            }
           
    return (
            <div className ="movie-container" >
                <div className = "product-container" >
                    {
                        movies.map(movie=><MovieName handleAddToCart={handleAddToCart} movie={movie} key={movie.name}></MovieName>)
                    }

                </div>
                <div className = "cart-container" >
                    <h4>Movies Item:{cart.length}</h4>
                    <h4>Total movies budget: {total}</h4>
                    {
                        cart.map(movie => <p>{movie.name}</p>)
                    }
                </div>
            </div>
         
    );
};
export default Movie;
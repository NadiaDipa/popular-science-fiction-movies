import React from 'react';
import './MovieName.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const MovieName = (props) => {
    const {name,cast,director,IMBDRating,
 releaseDate,boxOffice,img} = props.movie;
    
 
    return (
        <div className="moviename">
            
            <img className = "image-item" src={img} alt="" />
            
            
            <h2>{name}</h2>
            <p><small><b> Cast: </b> {cast} </small></p>
            <p><small><b> Director: </b> {director} </small></p>
            <p><small><b> IMBD Rating: </b> {IMBDRating} </small></p>
            <p><small><b> Release Date: </b> {releaseDate} </small></p>
            <p> <small> <b> Box Office: </b> {boxOffice} </small> </p>

           
        
            <button className = "btn" onClick = {() => props.handleAddToCart(props.movie)}> < FontAwesomeIcon icon = {faShoppingCart}/> add to cart</button >
            
          
        </div>
    ) 
    
};

export default MovieName;
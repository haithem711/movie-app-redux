import React from 'react';
import AddModal from './AddModal';
import Rating from './Rating.js';
import { connect } from "react-redux";
import { remove} from "../actions/actions";
import { Link } from "react-router-dom";
import { edit} from "../actions/actions";


const Movies = (props) => {
    return (<div className="container">
        {props.data.map(el => <li className="movies-bloc">
        <img className="movies-img" src={el.source}></img>
        <div  >
            <h2 className="movies-name" >{el.title}</h2>
            
            
        </div>
        <p  >{el.year}</p>
            <Rating  rating={el.rating} setRate={() => {}}/>
          <Link to={`/movies/${el.id}`}>
               <button className="movie-description">Movie Description</button> 
               </Link> 
            <div className="edit-remove">
            
            <AddModal edit={true} movie={el}/>
            <button className="movie-edit" onClick={() => props.remove(el.id)}>Remove</button>
            </div>
    </li>
    )}
    {(props.text === '' && props.rating === 1) && <button className="add-movie" > <AddModal edit={false}/></button> }
    </div>
    
    )

}


const mapDispatchToProps = dispatch => {
    return {
      
    remove  : id => dispatch(remove(id)),
    edit  : movie => dispatch(edit(movie)), 
    };
  };

export default connect (null,mapDispatchToProps)(Movies);
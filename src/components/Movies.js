import React , {Component} from 'react';
import AddModal from './AddModal';
import Rating from './Rating.js';
import { connect } from "react-redux";
import { remove} from "../actions/actions";
import { Link } from "react-router-dom";
import { edit} from "../actions/actions";
import StarRatingComponent from 'react-star-rating-component';



class Movies extends Component {
    state={
        rating :1
    }
    render(){
        return (<div className="container">
        {this.props.data.filter(el => el.rating >= this.props.alldata.rating).map(el => <li className="movies-bloc">
        <img className="movies-img" src={el.source}></img>
        <div  >
            <h2 className="movies-name" >{el.title}</h2>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={el.rating}
        />
            
        </div>
        <p  >{el.year}</p>
            <Rating  rating={el.rating}/>
          <Link to={`/movies/${el.id}`}>
               <button className="movie-description">Movie Description</button> 
               </Link> 
            <div className="edit-remove">
            
            <AddModal edit={true} movie={el}/>
            <button className="movie-edit" onClick={() => this.props.remove(el.id)}>Remove</button>
            </div>
    </li>
    )}
    {(this.props.text === '' && this.props.rating === 1) && <button className="add-movie" > <AddModal edit={false}/></button> }
    </div>
    
    )
    }
    

}

const mapStateToProps =state=>{
return {alldata:state.movie}
}
const mapDispatchToProps = dispatch => {
    return {
      
    remove  : id => dispatch(remove(id)),
    edit  : movie => dispatch(edit(movie)), 
    };
  };

export default connect (mapStateToProps,mapDispatchToProps)(Movies);
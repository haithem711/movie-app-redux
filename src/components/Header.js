import React from "react";
import { render } from "@testing-library/react";
import uuid from "uuid";
import Rating from "./Rating";
import { search } from '../actions/actions'
import {connect} from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';
import{setRate} from '../actions/actions'


class Header extends React.Component {
    constructor(props){
  super(props);
  this.state = {
    title : '',
    rating : 1
  }
  }
   onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
      this.props.setRate(nextValue)
    }
    

  render(){
    
   
    return (
      <div className="header">
        <div>
          <input
            className="movies-search"
            type="text"
            placeholder="Type movie name to search"
            onChange={e => this.setState({title: e.target.value}, () => this.props.searchMovie({title: this.state.title, rating: this.props.rating}))}
           
          />
          <input className="button-search" type="button" value="Search" />
        </div>
        <div className="rating" >
          <span> 
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />Minimum rating</span>
          <Rating title={this.state.title} rating={this.props.rating} setRate={x => this.props.setRate(x)}/>
          
        </div>
        </div>
       
    )}
  };
  const mapDispatchToProps = dispatch => {
    return {
      searchMovie: x => dispatch(search(x)),
      setRate:x=>dispatch(setRate(x))
    }
  }
  export default connect(null, mapDispatchToProps)(Header);
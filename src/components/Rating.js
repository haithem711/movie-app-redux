import React, { Component } from 'react';
import { connect } from 'react-redux'
import { search } from '../actions/actions'
import StarRatingComponent from 'react-star-rating-component';

class Rating extends Component{
    constructor(props){
        super(props)
       
    }

    render(){
        let arr = [];
        for (let i = 0; i <= 4; i++) {
            if(this.props.rating > i){
                arr.push(<i onClick={() => {
                    this.props.searchMovie({title: this.props.title, rating: i+1})
                    this.props.setRate(i + 1)
                }} class="fas fa-star"></i>)
            }else{
                arr.push(<i onClick={() => {
                    this.props.searchMovie({title: this.props.title, rating: i+1})
                    this.props.setRate(i + 1)
                }} class="far fa-star"></i>) 
            }
        }
        return(
            <div className="rate-stars">
                {arr}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      searchMovie: x => dispatch(search(x))
    }
  }

export default connect(null, mapDispatchToProps)(Rating);
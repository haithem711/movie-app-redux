import React from "react";
import { render } from "@testing-library/react";
import uuid from "uuid";
import Rating from "./Rating";
import { search } from '../actions/actions'
import {connect} from 'react-redux'

class Header extends React.Component {
    constructor(props){
  super(props);
  this.state = {
    title : ''
  }
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
          <span>Minimum rating</span>
          <Rating title={this.state.title} rating={this.props.rating} setRate={x => this.props.setRate(x)}/>
          
        </div>
        </div>
       
    )}
  };
  const mapDispatchToProps = dispatch => {
    return {
      searchMovie: x => dispatch(search(x))
    }
  }
  export default connect(null, mapDispatchToProps)(Header);
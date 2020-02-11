import React from 'react';
import Header from './components/Header';
import Movies from './components/Movies';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from "react-redux";
import { addNewMovie} from "./actions/actions"; 
import { search} from "./actions/actions"; 
import { setRate} from "./actions/actions"; 


class App extends React.Component{
  constructor(props){
  super(props)
  this.state={
    keyword:"",
    rating: 1
  }
  console.log(props.movies)
}
search = (keyword) =>{
 
  this.setState({
    keyword: keyword
  })
}
setRate = number =>{
  this.setState({
    rating: number
  })
}

addNewMovie = movie => {
  this.props.addNewMovie(this.state)
}

  render()
  {return (
    <div className="App">
      <Header rating={this.state.rating} setRate={x => this.setRate(x)} search={x => this.search(x)} />
      <div className="movies-section">
          <Movies text={this.state.keyword} rating={this.state.rating} addNewMovie={x => this.addNewMovie(x)} data={this.props.movies.MoviesDescription} /> 
          
         
        </div>
      
       
        
    </div>
  );}
}

const mapStateToProps = state => {
  return {
    movies: state.movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: newMovie => dispatch(addNewMovie(newMovie)),
   search: (name,rating)=> dispatch(search(name,rating)),
   setRate: rating=> dispatch(setRate(rating)),
  
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
import React,{Component} from 'react';
import { connect } from "react-redux";
import Rating from './Rating'
class DescriptionMovies extends Component {
    constructor(props){
    super (props) ;
    this.state={
        movie:{
            source:'',
            title:'',
            year:'',
            rating:1,
        }
    };
    }
    componentDidMount =()=>{
        this.setState({
            movie : this.props.movies.filter(el => el.id === this.props.match.params.id)[0]
        })
    }
    
    render(){
      {return(
    <div className="container description">
            <li className="movies-bloc">
            <img className="movies-img" src={this.state.movie.source}></img>
            <div  >
                <h2 className="movies-name" >{this.state.movie.title}</h2>
                
                
            </div>
            <p className="movies-year"  >{this.state.movie.year}</p>
                <Rating className="movies-rate" rating={this.state.movie.rating} setRate={() => {}}/>
              
                   <button className="movie-description">Movie Description</button> 
                
                <div>
                <button className="movie-edit">Edit</button>
                <button className="movie-edit" >Remove</button>
                </div>
        </li>
      
        </div>
    
    
    )  
    }
    
    
    }
    };
    const mapStateToProps = state => {
        return {
          movies: state.MovieReducer.MoviesDescription
        };
      };
    export default connect(mapStateToProps)(DescriptionMovies);
import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import { addNewMovie} from "../actions/actions"; 
import { edit} from "../actions/actions";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title:this.props.edit?this.props.movie.title: '',
      source:this.props.edit?this.props.movie.source:'',
      year:this.props.edit?this.props.movie.year:'',
      rating:this.props.edit?this.props.movie.rating:''
    };
  }
  
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
      this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <div>
        {this.props.edit ? <button className="movie-edit" onClick={this.handleShow}>Edit</button> :<Button className="plus" variant="primary" onClick={this.handleShow}>
          <i class="fas fa-plus fa-3x"></i>
        </Button> }
         

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div >
              <div className="align-modal">
                <label className="label-modal">Title:</label>
                <input  type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
              </div>
              <div className="align-modal">
                <label className="label-modal">Image:</label>
                <input  type="text" name="source" onChange={this.handleChange} value={this.state.source}/>
              </div>
              <div className="align-modal">
                <label className="label-modal">Rating:</label>
                <input  type="text" name="rating" onChange={this.handleChange} value={this.state.rating}/>
              </div>
              <div className="align-modal">
                <label className="label-modal">Year:</label>
                <input  type="text" name="year" onChange={this.handleChange} value={this.state.year}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button className="plus" variant="primary" onClick={() =>{
               { this.props.edit?this.props.editMovie({...this.state, id: this.props.movie.id}):this.props.addNewMovie(this.state)}
                this.setState({show:false})
            }}>{this.props.edit?'Edit':'Add Movie'}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    movies: state.movie.MoviesDescription
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: newMovie => dispatch(addNewMovie(newMovie)),
    editMovie  : movie => dispatch(edit(movie)), 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
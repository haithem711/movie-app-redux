import {ADD_MOVIE} from "./type";
import {SEARCH_MOVIE} from "./type";
import {SET_RATE} from "./type";
import {REMOVE_MOVIE} from "./type";
import {EDIT_MOVIE} from "./type";


export const addNewMovie=(newMovie)=>{
    return{
    type: ADD_MOVIE,
    payload : newMovie
    };
}

export const search=( keyword) =>{
    return{
    type: SEARCH_MOVIE,
    payload : keyword
    };
}

export const setRate=(rating)=>{
    return{
    type: SET_RATE,
    payload : rating
    };
}

export const remove=(id)=>{
    return{
    type: REMOVE_MOVIE,
    payload :id
    };
}

export const edit=(movie)=>{
    return{
    type: EDIT_MOVIE,
    payload :movie
    };
}
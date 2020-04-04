import { combineReducers, createStore, applyMiddleware } from "redux";
import weatherReducer from "./weatherReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    weather: weatherReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

export default store;
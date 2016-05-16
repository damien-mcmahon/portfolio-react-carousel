import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import carousel from './carousel.js';


export default combineReducers({
  routing: routerReducer,
  carousel: carousel
});

import {
  LOAD_CAROUSEL
} from '../actions/carousel.js';


export default function carousel(state={}, action) {
  switch(action.type) {
    case LOAD_CAROUSEL:
      return Object.assign({}, action.carousel);
    default:
      return state;
  }
}

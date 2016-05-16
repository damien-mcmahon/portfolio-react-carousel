import {
  LOAD_CAROUSEL
} from '../actions/carousel.js';

const carouselInitialState = {};

export default function carousel(state = carouselInitialState, action) {
  switch(action.type) {
    case LOAD_CAROUSEL:
      return Object.assign({}, action.carousel);
    default:
      return state;
  }
}

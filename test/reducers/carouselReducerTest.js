import reducer from 'reducers/carousel';
import * as types from 'actions/carousel';

describe("Reducers::Carousel", () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({});
  });

  it('handles LOAD_CAROUSEL', () => {
    const carouselData = {
      "items": [{
        "image": "test.png", "title": "testing"
      }]
    };

    const loadCarouselAction = {
      type: types.LOAD_CAROUSEL,
      carousel: carouselData
    };

    expect(reducer({},loadCarouselAction)).to.deep.equal(carouselData);
  });
});

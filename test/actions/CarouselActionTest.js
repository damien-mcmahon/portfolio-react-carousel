import * as actions from 'actions/carousel';
import * as types from 'actions/carousel';

describe('Actions', () => {
  it('should create an action to load images', () => {
    const carouselData = {
      "items": [
        { "image": 'test.png', "title": "This is a test"}
      ]
    };

    const expectedAction = {
      type: types.LOAD_CAROUSEL,
      carousel: carouselData
    };

    expect(actions.loadCarouselData(carouselData))
    .to
    .deep
    .equal(expectedAction);
  });
});

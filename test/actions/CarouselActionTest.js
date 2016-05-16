import * as actions from 'actions//carousel';
import * as types from 'actions//carousel';

describe('Actions', () => {
  it('should create an action to load images', () => {
    const carouselData = {
      "items": [
        { "img": 'test.png', "caption": "This is a test"}
      ]
    };

    const expectedAction = {
      type: types.LOAD_CAROUSEL,
      carouselData
    };

    expect(actions.loadCarouselData(carouselData)).toEqual(expectedAction);
  });
});

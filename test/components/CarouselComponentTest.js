/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import { Carousel } from 'components/Carousel.js';

describe('CarouselComponent', () => {
  let component;
  let mockCarouselData = {
    "items": [{"image": "test.png", "title": "TEST #1"}]
  };

  beforeEach(() => {
    component = createComponent(Carousel, {carousel: mockCarouselData});
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('carousel--wrapper');
  });
});

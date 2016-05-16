import CarouselData from '../../stubs/images.json';
export const LOAD_CAROUSEL = 'LOAD_CAROUSEL';
export const MOVE_CAROUSEL = 'MOVE_CAROUSEL';


export function loadCarouselData() {
  return {
    type: LOAD_CAROUSEL,
    carousel: CarouselData
  };
}

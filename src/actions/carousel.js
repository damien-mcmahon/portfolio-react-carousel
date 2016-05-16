export const LOAD_CAROUSEL = 'LOAD_CAROUSEL';
export const MOVE_CAROUSEL = 'MOVE_CAROUSEL';


export function loadCarouselData(CarouselData) {
  return {
    type: LOAD_CAROUSEL,
    carousel: CarouselData
  };
}

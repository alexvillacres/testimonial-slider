import { Splide } from '@splidejs/splide'; // Import the Splide module (assuming it's available via npm or a script tag)
import { Intersection } from '@splidejs/splide-extension-intersection';
import type { SplideOptions } from 'splide';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize your Splide slider with options
  const splideOptions: SplideOptions = {
    arrows: true,
    arrowPath:
      'M21.25 14.2032L26.75 19.4532C26.9062 19.6094 27 19.7969 27 20.0157C27 20.2032 26.9062 20.3907 26.75 20.5469L21.25 25.7969C20.9688 26.0782 20.4688 26.0782 20.1875 25.7657C19.9062 25.4844 19.9062 24.9844 20.2188 24.7032L24.375 20.7657H13.75C13.3125 20.7657 13 20.4219 13 20.0157C13 19.5782 13.3125 19.2657 13.75 19.2657H24.375L20.2188 15.2969C19.9062 15.0157 19.9062 14.5157 20.1875 14.2344C20.4688 13.9219 20.9375 13.9219 21.25 14.2032Z',
    type: 'loop',
    gap: '1.5rem',
    pagination: false,
    interval: 4000,
    pauseOnHover: false,
    perPage: 3,
    perMove: 1,
    autoplay: 'pause',
    // Other options here
    intersection: {
      inView: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        autoplay: true,
      },
      outView: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        autoplay: false,
      },
    },
  };

  const splideTestimonial = new Splide('#splide-testimonial', splideOptions);

  // Mount the Splide slider
  splideTestimonial.mount({ Intersection });
});

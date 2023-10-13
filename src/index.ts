import { Splide } from '@splidejs/splide'; // Import the Splide module (assuming it's available via npm or a script tag)
import { Intersection } from '@splidejs/splide-extension-intersection';
import type { SplideOptions } from 'splide';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize your Splide slider with options
  const splideOptions: SplideOptions = {
    arrows: true,
    type: 'loop',
    gap: '2rem',
    pagination: false,
    interval: 4000,
    pauseOnHover: false,
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

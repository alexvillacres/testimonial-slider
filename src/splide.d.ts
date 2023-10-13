declare module 'splide' {
  interface SplideOptions {
    arrows: boolean;
    type: 'loop';
    gap: string;
    autoplay?: boolean | 'pause';
    interval: number;
    pagination: boolean;
    pauseOnHover: boolean;
    intersection?: SplideIntersectionOptions;
  }

  interface SplideIntersectionOptions {
    inView: IntersectionViewOptions;
    outView: IntersectionViewOptions;
  }

  interface IntersectionViewOptions {
    root?: HTMLElement | null;
    rootMargin?: string;
    threshold?: number | number[];
    // Adding `autoplay` to the interface to match documentation.
    autoplay?: boolean;
  }

  class Splide {
    constructor(selector: string, options: SplideOptions);
    mount(): void;
  }
}

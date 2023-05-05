type TBreakpoint = {
  slidesPerView: number;
  spaceBetween?: number;
};

export type TBreakpoints = Record<number, TBreakpoint>;

export interface IBreakpoints {
  breakpoints: TBreakpoints;
}

const options: IBreakpoints = {
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
};

export default options

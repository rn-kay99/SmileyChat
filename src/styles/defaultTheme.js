import { DefaultTheme } from 'styled-components/macro';

const breakpoints_in_px = {
    mobile: 414,
    tablet_portrait: 768,
    // tablet_landscape: 1024,
    desktop: 1280,
}

const page_padding_in_rem = {
    mobile: 1.9375, // 31px
    tablet_portrait: 3.25, // 52px
    // tablet_landscape: grid_in_rem.gutter.tablet_landscape,
    // desktop: 6.875, // 110px
    desktop: 2.5, // 40px
  };

export const defaultTheme = {
    breakpoints: breakpoints_in_px,
    pagePadding: page_padding_in_rem,
};
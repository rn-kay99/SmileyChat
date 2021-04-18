/*
 * Media queries utility
 */

import { defaultTheme } from './defaultTheme'
import { css } from 'styled-components/macro';

export const media = {
    mobile: (...args) => css`
        @media only screen and (max-width: ${defaultTheme.breakpoints.tablet_portrait - 1}px) {
            ${css(...args)}
     }
    `,
    tablet_portrait_up: (...args) => css`
        @media only screen and (min-width: ${defaultTheme.breakpoints.tablet_portrait}px) {
            ${css(...args)}
        }
  `,
    // tablet_landscape_up: (...args) => css`
    //   @media only screen and (min-width: ${breakpoints.tablet_landscape}px) {
    //     ${css(...args)}
    //   }
    // `,
    desktop_up: (...args) => css`
        @media only screen and (min-width: ${defaultTheme.breakpoints.desktop}px) {
            ${css(...args)}
        }
  `,
}
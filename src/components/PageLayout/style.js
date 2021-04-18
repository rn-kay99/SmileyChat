import styled, { css } from 'styled-components/macro';
import { media } from '../../styles/media';

export const pageContentPadding = css`
  padding-left: ${props => props.theme.pagePadding.mobile}rem;
  padding-right: ${props => props.theme.pagePadding.mobile}rem;

  ${media.tablet_portrait_up`
    padding-left: ${props => props.theme.pagePadding.tablet_portrait}rem;
    padding-right: ${props => props.theme.pagePadding.tablet_portrait}rem;
  `};

  ${media.desktop_up`
    padding-left: ${props => props.theme.pagePadding.desktop}rem;
    padding-right: ${props => props.theme.pagePadding.desktop}rem;
  `};
`;

export const PageGrid = styled.div`
    display: block
    ${pageContentPadding}
`

export default PageGrid

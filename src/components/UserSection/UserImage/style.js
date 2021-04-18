import styled from "styled-components"
import { media } from '../../../styles/media'

export const ProfileImage = styled.div`
    position: relative;
    display: flex;
    margin-top: 30px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
`;

export const DecorationCircle1 = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 76px;
    height: 76px;
    top: -3px;
    left: -3px;
    border-width: 2px;
    border-style: solid;
    border-color: #7E57C2 #7E57C2 #7E57C2 transparent;
    border-radius: 50%;
    transition: border-radius 1.5s ease-in-out;

    ${media.desktop_up`
        width: 90px;
        height: 90px;
        top: -10px;
        left: -9px;
    `};
`;

export const DecorationCircle2 = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 82px;
    height: 82px;
    top: -6px;
    left: -6px;
    border-width: 2px;
    border-style: solid;
    border-color: #7E57C2 transparent #7E57C2 #7E57C2;
    border-radius: 50%;
    transition: border-radius 1.5s ease-in-out;

    ${media.desktop_up`
        width: 100px;
        height: 100px;
        top: -15px;
        left: -14px;
    `};
`;

export const ImageEmoji = styled.span`
    font-size: 35px;
    ${media.desktop_up`
        font-size: 65px;
    `};
`;

export default { ProfileImage, DecorationCircle1, DecorationCircle2, ImageEmoji };
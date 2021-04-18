import styled from 'styled-components'

export const Card = styled.div`
    padding: 10px;
    background-color: white;
    border-radius: 0.4rem;
    box-shadow: -0.1rem 0.1rem 0.2rem #4527a0;
`;

export const CenteredCard = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 10px;
    background-color: white;
    border-radius: 0.4rem;
    box-shadow: -0.1rem 0.1rem 0.2rem #4527a0;
`;

export const CardText = styled.div`
    background-color: white;
`;

export default {Card, CardText};
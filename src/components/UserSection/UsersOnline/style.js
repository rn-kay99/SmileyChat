import styled from 'styled-components'

export const UserList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    justify-items: stretch;
`;

export const Item = styled.div`
    padding: 10px 0;
    background-color: white;
    border: 3px solid #444;
    border-radius: 4px;
    text-align: center;
    font-size: 45px;
`;


export default { UserList, Item }
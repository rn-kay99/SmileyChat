import styled from 'styled-components'

export const Message = styled.div`
    display: flex;
    align-items: center;
    background-color: #d2b7e5;
    border: 2px solid #7E57C2;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: 15px;
`;

export const MessageImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    margin-right: 10px;
    width: 25px;
    height: 25px;
    font-size: 25px;
    border-top-left-radius: 8px;
    background-color: #d2b7e5;
    border-right: 2px solid #7E57C2;
`

export default { Message, MessageImage }
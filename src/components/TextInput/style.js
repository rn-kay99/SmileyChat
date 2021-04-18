import styled from 'styled-components'

export const Input = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    margin: 20px 0;
    bottom: 0;
    left: 0;
    width: 100%;
`

export const TextField = styled.input`
    display: block;
    background-color: #e9ecef;
    margin: 0;
    padding: 0.8rem 1.6rem;
    color: inherit;
    width: 70%;
    font-family: inherit;
    font-size: 2.1rem;
    font-weight: inherit;
    line-height: 1.8;
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow 300ms;
    margin-right: 10px;
`

export const SendButton = styled.button`
    display: block;
    background-color: #e9ecef;
    margin: 0;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    font-family: inherit;
    font-size: 2.1rem;
    font-weight: inherit;
    line-height: 1.8;
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow 300ms;
`

export default {Input, TextField}
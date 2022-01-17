import styled, { css } from 'styled-components';

export const Input = styled.input`
  border: solid #ccc 1px;
  font-family: Helvetica;
  font-size:1em;
  padding:5px;
`;

export const Button = styled.button`
    padding: 0.35rem 1.2rem;
    font-family: generalgrotesque, arial, serif;
    color: rgb(11, 17, 30);
    background-color: rgb(255 109 27);
    border: 0px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    cursor:pointer;
    &:hover{
        background: rgb(255 128 57);
    }
`;
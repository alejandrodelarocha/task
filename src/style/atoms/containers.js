import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height:100vh;
  width:100vw;
`;

export const Box = styled.div`
  display:flex;
  width: 400px;
  padding: 10px;
  background: #FFF;
  border-radius: 10px;
  border:solid 1px #CCC;
  box-shadow:0px 0px 4px 0px #CCC;
  align-items: center;
  justify-content: center;
  margin-bottom:10px;
  cursor:${props => props.cursor};
  ${props => props.cursor === 'pointer' ? `
  &:hover{
    background:#ccc;
  }
  ` : ``}

`;
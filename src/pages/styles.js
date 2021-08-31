import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: aqua;
  p {
    width: 500px;
    background: silver;
    margin-left: 80px;
    margin-top: 80px;
    border-style: dashed;
  }
`;

export const ContentForm = styled.div`
  background: aquamarine;
  width: 300px;
  height: 200px;
  display: grid;
  justify-content: center;
  border-style: dashed;
  margin-left: 80px;
  margin-top: 40px;
  div {
    margin: 10px;
  }
  section {
    justify-content: center;
    margin: 10px;
  }
`;

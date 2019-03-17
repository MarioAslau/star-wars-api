import styled, { css } from 'styled-components';

export const Container = styled.div`
  font-family: 'Press Start 2P';
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  /* align-items: flex-start;
  border: 1px solid #999;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;
  /* width: 235px;
  color: black;w
  background-color: white; */
  font-size: 16px;
`;

export const MainCard = styled.div`
  position: relative;
  /* width: 100%; */
  padding: 20px 30px 20px 30px;
  margin: 5px 10px;
  background-color: #eb524a;
  color: white;
  border-radius: 5px;
  text-align: center;

  @media (min-width: 414px) {
    text-align: left;
  }
`;

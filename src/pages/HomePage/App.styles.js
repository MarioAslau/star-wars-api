import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  min-height: 100vh;
  max-width: 800px

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Logo = styled.img`
  height: 30vmin;
  pointer-events: none;
  padding: 2rem 0rem;
`;

export const Form = styled.form`
  width: 60%;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 20px;
  border: none;
  box-sizing: border-box;
  padding: 14px 15px;
`;

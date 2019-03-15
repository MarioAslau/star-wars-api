import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Body = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Logo = styled.img`
  height: 40vmin;
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

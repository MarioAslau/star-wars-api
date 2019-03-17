import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  text-align: center;
  font-family: 'Press Start 2P';
`;

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${spin} 20s infinite linear;
  filter: brightness(0) invert(1);
`;

export const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

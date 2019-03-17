import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  padding: 15px 10px 0px 44px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  max-width: 400px;
  box-sizing: border-box;
`;

export const Text = styled.div`
  font-family: 'Press Start 2P';
  color: ${p => p.theme.text.color};
  font-size: 20px;
  margin-right: 15px;
`;

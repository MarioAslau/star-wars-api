import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  padding: 9px 0px 0px 44px;
`;

export const Text = styled.div`
  font-family: 'Avenir Next';
  color: ${p => p.theme.text.color};
  font-size: 20px;
  margin-right: 20px;
`;

import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Press Start 2P';
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  font-size: 16px;
`;

export const MainCard = styled.div`
  position: relative;
  /* width: 100%; */
  padding: 20px 30px 20px 30px;
  ${props =>
    !props.secondary ? 'margin: 5px 10px 25px' : 'margin: 10px 10px'};
  ${props =>
    !props.secondary
      ? `background-color: ${props.theme.background.lightRed};`
      : `background-color: ${props.theme.background.white}`};
  ${props =>
    !props.secondary
      ? `color: ${props.theme.text.white};`
      : `color: ${props.theme.text.black};`};
  border-radius: 5px;
  text-align: center;
  line-height: 15pt;
  font-size: 14px;

  @media (min-width: 414px) {
    text-align: left;
  }
`;

export const Button = styled.button`
  /* bottom: 0; */
  ${props => (!props.clicked ? 'right: 31%' : 'right: 20px')};
  background-color: ${props => props.theme.background.black};
  box-shadow: inset 0 -5px 45px ${props => props.theme.shadow.dark};
  border: 1px solid ${props => props.theme.background.secondary};
  border-radius: 60px;
  color: white;
  font-family: 'Press Start 2P';
  position: absolute;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  padding: 6px 20px 6px;
  margin-left: 10px;
  height: 48px;
  z-index: 90;

  -webkit-transition: width 2s;
  transition: all 2s;
`;

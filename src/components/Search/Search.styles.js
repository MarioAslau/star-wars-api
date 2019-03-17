import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Press Start 2P';
  max-width: 400px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 95%;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0 15px 12px;
  font-family: 'Press Start 2P';
  font-weight: 400;
  background: ${props => props.theme.background.secondary};
  border: none;
  outline: none;
  color: ${props => props.theme.text.white};
  text-shadow: 1px 1px 1px ${props => props.theme.background.secondary};
  border: 1px solid ${props => props.theme.background.secondary};
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px ${props => props.theme.shadow.dark},
    0 1px 1px ${props => props.theme.shadow.light};
  transition: all 0.3s ease-in-out;
  position: relative;
  font-size: 16px;

  &:focus {
    text-indent: 12px;
    box-shadow: inset 0 -5px 45px ${props => props.theme.shadow.medium},
      0 1px 1px ${props => props.theme.shadow.light};
  }
`;

export const NoSuggestion = styled.div`
  color: ${props => props.theme.text.grey};
  font-size: 14px;
  margin-top: 15px;
`;

export const Suggestions = styled.ul`
  display: block;
  position: relative;
  max-height: 250px;
  padding: 15px 0 15px 12px;
  margin-top: 0px;
  font-family: 'Press Start 2P';
  font-weight: 400;
  font-size: 14px;
  border: none;
  outline: none;
  color: ${props => props.theme.text.white};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  list-style: none;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  padding: 0.5rem;
  ${props => props.active && `color: ${props.theme.text.gold};`};
  ${props => props.active && 'cursor: pointer'};
  ${props => props.active && 'font-weight: 700'};

  &:hover {
    color: ${props => props.theme.text.gold};
    cursor: pointer;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  overflow: hidden;
  padding: 6px 10px 6px;
  border-radius: 5px;
  margin-left: 10px;
  background: ${props => props.theme.background.secondary};
  border: 1px solid ${props => props.theme.background.secondary};

  box-shadow: inset 0 -5px 45px ${props => props.theme.shadow.dark};
  color: white;
  height: 48px;
`;

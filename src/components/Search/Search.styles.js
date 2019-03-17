import styled, { css } from 'styled-components';

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
  color: #377d6a;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  /* text-indent: 60px; */
  transition: all 0.3s ease-in-out;
  position: relative;
  font-size: 16px;

  &:focus {
    text-indent: 12px;
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
      0 1px 1px rgba(255, 255, 255, 0.2);
  }
`;

export const NoSuggestion = styled.div`
  color: #999;
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
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  list-style: none;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  padding: 0.5rem;
  ${props => props.active && 'color: #fae042;'};
  ${props => props.active && 'cursor: pointer'};
  ${props => props.active && 'font-weight: 700'};

  &:hover {
    color: #fae042;
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
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);

  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2);
  color: white;
  height: 48px;
`;

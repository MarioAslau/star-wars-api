import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Input = styled.input`
  border: 1px solid #999;
  padding: 0.5rem;
  width: 300px;
`;

export const NoSuggestion = styled.div`
  color: #999;
  padding: 0.5rem;
`;

export const Suggestions = styled.ul`
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem);
`;

export const ListItem = styled.li`
  padding: 0.5rem;

  ${props => props.active && "background-color: #008f68"};
  ${props => props.active && "color: #fae042;"};
  ${props => props.active && "cursor: pointer"};
  ${props => props.active && "font-weight: 700"};

  &:hover {
    background-color: #008f68;
    color: #fae042;
    cursor: pointer;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  /* margin-left: 1rem; */
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  padding: 6px 7px 6px;
`;

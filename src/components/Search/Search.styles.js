import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: "Arvo";
`;

export const Input = styled.input`
  /* border: 1px solid #999;
  padding: 0.5rem;
  width: 300px; */

  display: block;
  width: 300px;
  padding: 15px 0 15px 12px;
  font-family: "Arvo";
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
  text-indent: 60px;
  transition: all 0.3s ease-in-out;
  position: relative;
  font-size: 20px;

  &:focus {
    text-indent: 12px;
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
      0 1px 1px rgba(255, 255, 255, 0.2);
  }
`;

export const NoSuggestion = styled.div`
  color: #999;
  padding: 0.5rem;
`;

export const Suggestions = styled.ul`
  /* border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: calc(300px + 1rem); */
  display: block;
  width: 300px;
  padding: 15px 0 15px 12px;
  font-family: "Arvo";
  font-weight: 400;
  color: #377d6a;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  /* box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2); */
  /* text-indent: 60px; */
  /* transition: all 0.3s ease-in-out; */
  position: relative;
  font-size: 20px;
  list-style: none;
  margin-top: 0px;
`;

export const ListItem = styled.li`
  padding: 0.5rem;

  /* ${props => props.active && "background-color: #008f68"}; */
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

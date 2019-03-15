import React from "react";
import { Container } from "./Person.styles";
import PropTypes from "prop-types";

const Person = props => {
  const { person } = props;
  console.log("Props", person);
  return (
    <Container>
      <p>Name:{!!person && person.name}</p>
      <p>Birth year: {!!person && person.birth_year}</p>
      <p>Gender: {!!person && person.gender}</p>
      <p>Heigh: {!!person && person.height}</p>
      <p>Mass:{!!person && person.mass}</p>
      <p>Eye Color: {!!person && person.eye_color}</p>
      <p>Skin Color: {!!person && person.skin_color}</p>
      <p>Hair Color: {!!person && person.hair_color}</p>
      <p>Movie Appearances: {!!person && person.films.length}</p>
    </Container>
  );
};

export default Person;

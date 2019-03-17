import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, MainCard, Button } from './Person.styles';

class Person extends Component {
  state = {
    displayStatus: false,
  };

  changeDisplay = () => {
    this.setState(prevState => ({
      displayStatus: !prevState.displayStatus,
    }));
  };

  render() {
    const {
      props: { person },
      state: { displayStatus },
      changeDisplay,
    } = this;
    console.log('Props', person);
    return (
      <Container>
        <MainCard secondary={false}>
          <p>Name:{!!person && person.name}</p>
          <Button type="button" onClick={changeDisplay} clicked={displayStatus}>
            {/* <FontAwesomeIcon icon={faJedi} size="2x" color="#fae042" /> */}
            {displayStatus ? <p>X</p> : <p>More Info</p>}
          </Button>
        </MainCard>
        {displayStatus ? (
          <Fragment>
            <MainCard secondary>
              <p>Birth year:{!!person && person.birth_year}</p>
            </MainCard>
            <MainCard secondary>
              <p>Gender:{!!person && person.gender}</p>
            </MainCard>
            <MainCard secondary>
              <p>Heigh:{!!person && person.height}</p>
            </MainCard>
            <MainCard secondary>
              <p>Mass:{!!person && person.mass}</p>
            </MainCard>
            <MainCard secondary>
              <p>Eye Color:{!!person && person.eye_color}</p>
            </MainCard>
            <MainCard secondary>
              <p>Skin Color:{!!person && person.skin_color}</p>
            </MainCard>
            <MainCard secondary>
              <p>Hair Color:{!!person && person.hair_color}</p>
            </MainCard>
            <MainCard secondary>
              <p>Eye Color:{!!person && person.eye_color}</p>
            </MainCard>
            <MainCard secondary>
              <p>Movie Appearances:{!!person && person.films.length}</p>
            </MainCard>
          </Fragment>
        ) : null}
      </Container>
    );
  }
}

export default Person;

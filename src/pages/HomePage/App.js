import React, { Component } from 'react';
import Axios from 'axios';
import logo from '../../assets/images/logo.svg';
import swLogo from '../../assets/images/Star_Wars_Yellow_Logo.svg';
import Loading from '../Loading/LoadingPage';
import { Container, Body, Form, Input, Logo } from './App.styles';
import Search from '../../components/Search/Search';
import Person from '../../components/Person/Person';

const API = 'https://swapi.co/api/people';
const DEFAULT_PERSON = 'LUKE';

class App extends Component {
  state = {
    searchInput: '',
    searchResult: [],
    displayablePerson: null,
  };

  getPeople = (url, people, resolve, reject) => {
    Axios.get(url)
      .then(response => {
        const retrievedPeople = people.concat(response.data.results);
        if (response.data.next !== null) {
          this.getPeople(response.data.next, retrievedPeople, resolve, reject);
        } else {
          resolve(retrievedPeople);
        }
      })
      .catch(error => {
        console.log(error);
        reject('Does not work right');
      });
  };

  updateSearchResult = response => {
    this.setState(() => ({
      searchResult: response,
    }));
  };

  componentDidMount = () => {
    new Promise((resolve, reject) => {
      this.getPeople(API, [], resolve, reject);
    }).then(response => {
      this.updateSearchResult(response);
    });
  };

  onSubmit = name => {
    const displayablePerson = this.state.searchResult.find(
      person => person.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
    this.setState(
      { displayablePerson },
      console.log('displayablePerson:', this.state.displayablePerson)
    );
  };

  handleChange = event => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchResult, searchInput, displayablePerson } = this.state;
    console.log(displayablePerson);
    if (searchResult.length === 0) return <Loading />;
    return (
      <Container>
        <Body>
          <Logo src={swLogo} alt="logo" />
          <Search suggestions={searchResult} onSubmit={this.onSubmit} />
          {displayablePerson ? <Person person={displayablePerson} /> : null}
        </Body>
      </Container>
    );
  }
}

export default App;

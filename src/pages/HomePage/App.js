import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import swLogo from '../../assets/images/Star_Wars_Yellow_Logo.svg';
import Loading from '../Loading/LoadingPage';
import { Container, Body, Logo } from './App.styles';
import Search from '../../components/Search/Search';
import Person from '../../components/Person/Person';
import SwitchButton from '../../components/Switch/Switch';
import { lightTheme, darkTheme } from '../../config/theme';

const API = 'https://swapi.co/api/people';

class App extends Component {
  state = {
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
    this.setState({ displayablePerson });
  };

  handleChange = event => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchResult, displayablePerson } = this.state;
    const theme = !this.props.checked ? darkTheme : lightTheme;

    if (searchResult.length === 0) return <Loading />;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Body>
            <SwitchButton />
            <Logo src={swLogo} alt="logo" />
            <Search suggestions={searchResult} onSubmit={this.onSubmit} />
            {displayablePerson ? <Person person={displayablePerson} /> : null}
          </Body>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  checked: state.switch,
});

App.propTypes = {
  checked: PropTypes.bool,
};

App.defaultProps = {
  checked: true,
};

export default connect(mapStateToProps)(App);

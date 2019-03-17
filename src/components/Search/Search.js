import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Input,
  NoSuggestion,
  Suggestions,
  ListItem,
  Button,
  Container,
  Flex,
} from './Search.styles';

class Search extends Component {
  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    searchInput: '',
    selected: false,
  };

  onChange = e => {
    const { suggestions } = this.props;
    const searchInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
    );
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      searchInput: e.currentTarget.value,
      selected: false,
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      searchInput: e.currentTarget.innerText,
      selected: true,
    });
    // console.log(this.state);
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        searchInput: filteredSuggestions[activeSuggestion].name,
        selected: true,
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  onSumit = () => {
    const {
      state: { selected, searchInput },
      props: { onSubmit },
    } = this;
    this.setState({
      showSuggestions: false,
    });
    if (selected) {
      onSubmit(searchInput);
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onSumit,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        searchInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && searchInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <Suggestions>
            {filteredSuggestions.map((suggestion, index) => {
              let active = false;

              if (index === activeSuggestion) {
                active = true;
              }
              return (
                <ListItem
                  active={active}
                  key={suggestion.name}
                  onClick={onClick}
                >
                  {suggestion.name}
                </ListItem>
              );
            })}
          </Suggestions>
        );
      } else {
        suggestionsListComponent = (
          <NoSuggestion>
            <em>No suggestions</em>
          </NoSuggestion>
        );
      }
    }

    return (
      <Container>
        <Flex>
          <Input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={searchInput}
          />
          {suggestionsListComponent}
        </Flex>
        <Button type="button" onClick={onSumit}>
          <FontAwesomeIcon icon={faJedi} size="2x" color="#fae042" />
        </Button>
      </Container>
    );
  }
}

Search.propTypes = {
  suggestions: PropTypes.instanceOf(Array),
  onSubmit: PropTypes.func,
};

Search.defaultProps = {
  suggestions: [],
  onSubmit: () => {},
};
export default Search;

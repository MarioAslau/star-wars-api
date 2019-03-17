import React from 'react';
import Switch from 'react-switch';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import switchState from '../../actions/switch';
import { Label, Text } from './Switch.styles';

const SwitchButton = props => {
  const { checked, changeSwitch } = props;
  return (
    <Label htmlFor="normal-switch">
      {checked ? <Text light>Jedi</Text> : <Text>Sith</Text>}
      <Switch
        onChange={changeSwitch}
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#06e78e"
        id="normal-switch"
      />
    </Label>
  );
};

const mapDispatchToProps = dispatch => ({
  changeSwitch: check => dispatch(switchState(check)),
});

const mapStateToProps = state => ({
  checked: state.switch,
});

SwitchButton.propTypes = {
  checked: PropTypes.bool,
  changeSwitch: PropTypes.func,
};

SwitchButton.defaultProps = {
  checked: true,
  changeSwitch: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchButton);

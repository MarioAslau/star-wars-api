const checkReducerDefaultState = true;

export default (state = checkReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SWITCH':
      return action.check;
    default:
      return state;
  }
};

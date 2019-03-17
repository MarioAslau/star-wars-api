const changeTheme = check => (dispatch, getState) =>
  dispatch({
    type: 'CHANGE_SWITCH',
    check,
  });

// .catch(error => {
//   console.log("Error getting documents:", error);
// });

export default changeTheme;

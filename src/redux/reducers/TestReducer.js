const TestReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "CHANGE_TITLE": {
      return state + 1;
    }
    case "SUBTRACT_ME": {
      return state - 1;
    }
    case "RESET": {
      return (state = 0);
    }
    default:
      return state;
  }
};

export default TestReducer;

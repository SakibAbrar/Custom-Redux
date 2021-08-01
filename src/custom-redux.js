function createStore(reducer) {
  let state;

  function dispatch(action) {
    // Call reducer to get the new state
    state = reducer(state, action);
  }

  // return the getter instead of the original state to keep it immutable
  function getState() {
    return state;
  }

  // return dispatch, getState ect. as an object
  return {
    dispatch,
    getState,
  };
}

export default createStore;

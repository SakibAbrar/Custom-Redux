import { ADD_BUG, REMOVE_BUG } from './actionTypes';

export function addBug(description) {
  return {
    type: ADD_BUG,
    payload: {
      description: description,
    },
  };
}

export function removeBug(id) {
  return {
    type: REMOVE_BUG,
    payload: {
      id: 1,
    },
  };
}

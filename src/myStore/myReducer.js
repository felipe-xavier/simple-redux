// Reducer responsible for handling the actions

import * as actions from "./actionTypes";

let lastId = 0;

const newBug = (description) => ({
  id: ++lastId,
  description : description,
  resolved : false,
})

export default function myReducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        newBug(action.payload.description)
      ];
    case actions.BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);

    case actions.BUG_RESOLVED:
      return state.map(bug => action.payload.id !== bug.id ? bug : {...bug, resolved: true});

    default:
      state
  }
}
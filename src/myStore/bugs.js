// We have 3 actions for the Bug-tracker
// We can Add, Remove and Mark a bug as resolved.

export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";
export const BUG_RESOLVED = "bugResolved";

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description,
    }
})

export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
    payload: {
        id,
    }
})

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id,
    }
})

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
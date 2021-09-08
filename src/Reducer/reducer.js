// Reducer
const quantity = {Lettuce : 0, Bacon : 0, Cheese : 0, Meat : 0}

export const counter = (state = quantity, action) => {
  switch (action.type) {
    case "INCREMENT":  {
      console.log(state[action.payload])
      state[action.payload] += 1;
      return ({...state, [action.payload] : state[action.payload] });
  } 
  case "DECREMENT": {
    state[action.payload] -= 1;
    return ({...state, [action.payload] : state[action.payload] });
  } 
    default: return state;
  }
};

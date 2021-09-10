// Reducer
const quantity = {Lettuce : 0, Bacon : 0, Cheese : 0, Meat : 0}

export const counter = (state = JSON.parse(JSON.stringify(quantity)), action) => {


  switch (action.type) {
    case "INCREMENT":  {
      console.log("INCREMENT")
      console.log(state[action.payload])
      state[action.payload] += 1;
      return ({...state, [action.payload] : state[action.payload] });
  } 
  case "DECREMENT": {
    console.log("DECREMENT")

    state[action.payload] -= 1;
    return ({...state, [action.payload] : state[action.payload] });
  }
   case "REMOVE": {
    console.log("REMOVE",quantity)

    return ({Lettuce : 0, Bacon : 0, Cheese : 0, Meat : 0});
  } 
    default: return state;
  }
};

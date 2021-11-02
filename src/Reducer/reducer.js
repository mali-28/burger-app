// Reducer
const quantity = { Lettuce: { number: 0, amount: 0 }, Bacon: { number: 0, amount: 0 }, Cheese: { number: 0, amount: 0 }, Meat: { number: 0, amount: 0 } }

export const counter = (state = JSON.parse(JSON.stringify(quantity)), action) => {


  switch (action.type) {
    case "INCREMENT": {
      let addInteger = state[action.payload.title]["number"] + 1;
      state[action.payload.title]["number"] = addInteger
      let addAmount = addInteger * action.payload.price;
      state[action.payload.title]["amount"] = addAmount;

      return ({ ...state, [action.payload.title]: { number: addInteger, amount: addAmount } });
    }
    case "DECREMENT": {
      let subInteger = state[action.payload.title]["number"] - 1; console.log({ subInteger })

      state[action.payload.title]["number"] = subInteger
      let subAmount = state[action.payload.title]["amount"]
      if (subInteger) {
        subAmount -= action.payload.price;
      } else {
        subAmount = 0;
      }
      state[action.payload.title]["amount"] = subAmount;

      return ({ ...state, [action.payload.title]: { number: subInteger, amount: subAmount } });

    }
    case "REMOVE": {
      return JSON.parse(JSON.stringify(quantity));
    }
    default: return state;
  }
};

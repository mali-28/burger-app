import { createStore } from "redux";
import { counter } from "../Reducer/reducer";

export const store = createStore(counter);

store.subscribe(() => {
  console.log("current store", store.getState());
});

import { createStore } from "redux";
import { counter } from "../Reducer/reducer";

export const store = createStore(counter);


import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const store = createStore(reducer,{},applyMiddleware(thunk))

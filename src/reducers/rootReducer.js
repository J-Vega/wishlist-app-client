import { combineReducers } from "redux";
import fetchReducer from "./fetchreducer";
import walmartReducer from "./walmartreducer";
import bestbuyReducer from "./bestbuyreducer";
import etsyReducer from "./etsyreducer";
import wishlistreducer from "./wishlistreducer";

export default combineReducers({
  walmartReducer,
  bestbuyReducer,
  etsyReducer,
  wishlistreducer

});
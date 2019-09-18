import { combineReducers } from "redux";
import sample from "./sample";

export default () =>
  combineReducers({
    sample
  });

/*
/  Stateの型を定義しておく。useSelecterなどでフィルタしやすいように。
*/
declare global {
  interface ReduxState {}
}

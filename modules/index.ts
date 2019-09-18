import { combineReducers } from "redux";
import sample, { sampleInitialState } from "./sample";

export default () =>
  combineReducers({
    sample
  });

export const getInitialState = () => ({
  sample: sampleInitialState
});

/*
/  Stateの型を定義しておく。useSelecterなどでフィルタしやすいように。
*/
declare global {
  interface ReduxState {}
}

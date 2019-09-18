import { createAction, handleActions } from 'redux-actions';
import { Dispatch } from 'redux';

export const sampleInitialState = {
  count: 0
};

// Actions
const COUNTUP = "app/counter/COUNTUP";

const CountUpAction = createAction(COUNTUP);

// side effects
export const countUp = () => (dispatch: Dispatch) => {
  dispatch(CountUpAction());
}

// Reducer
export default handleActions(
  {
    [COUNTUP]: (state) => ({
      ...state,
      count: state.count + 1,
    }),
  },
  sampleInitialState
);

export interface Counter {
  count: number;
}
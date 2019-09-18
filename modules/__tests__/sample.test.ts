// @flow
import reducer, {
  sampleInitialState,
  ResetAction,
  CountUpAction
} from "../sample";

test("init", () => {
  expect(reducer(undefined, ResetAction())).toEqual(sampleInitialState);
});

test("increment", () => {
  expect(reducer(sampleInitialState, CountUpAction())).toEqual({
    count: 1
  });
});

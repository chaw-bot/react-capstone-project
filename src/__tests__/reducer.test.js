import { StatsReducer, GET_STATS } from '../store/reducer';

describe('test the reducer function', () => {
  test('reducer returns new state', () => {
    const newState = ['a', 'b', 'c'];
    const result = StatsReducer(undefined, { type: GET_STATS, payload: newState });
    expect(result).toEqual(newState);
  });

  test('reducer to return empty array if action is undefined', () => {
    const newState = [];
    const result = StatsReducer(undefined, { type: undefined, payload: undefined });
    expect(result).toEqual(newState);
  });
});

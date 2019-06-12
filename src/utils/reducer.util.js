import { prop, map, values, reduce, compose, merge } from 'ramda';
import typeToReducer from 'type-to-reducer';

const splitActionCaseReducerFromActionConfig = actionConfig => {
  const actions = map(prop('action'))(actionConfig);
  const caseReducer = compose(
    reduce(merge, {}),
    values,
    map(prop('caseReducer'))
  )(actionConfig);

  return {
    actions,
    caseReducer,
  };
};

const reducerGenerator = (actionConfig, initialState) => {
  const {
    actions,
    caseReducer,
  } = splitActionCaseReducerFromActionConfig(actionConfig);

  const reducer = typeToReducer(caseReducer, initialState);

  return {
    actions,
    reducer,
  };
};

export { reducerGenerator, splitActionCaseReducerFromActionConfig };

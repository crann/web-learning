import * as types from './actionTypes';

export const generateFactAction = seed => ({
  type: types.GENERATE_FACT,
  seed,
});

export const generateFactInProgressAction = () => ({
  type: types.GENERATE_FACT_IN_PROGRESS,
});

export const generateFactSucceededAction = fact => ({
  type: types.GENERATE_FACT_SUCCEEDED,
  fact,
});

export const generateFactFailedAction = () => ({
  type: types.GENERATE_FACT_FAILED,
});

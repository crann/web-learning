import { createSelector } from 'reselect';

const properyEditorState = state => state.get('generator');

const inProgressSelector = () => createSelector(
  properyEditorState,
  state => state.get('inProgress'),
);

const hasSucceededSelector = () => createSelector(
  properyEditorState,
  state => state.get('hasSucceeded'),
);

const hasFailedSelector = () => createSelector(
  properyEditorState,
  state => state.get('hasFailed'),
);

const factSelector = () => createSelector(
  properyEditorState,
  state => state.get('fact'),
);

export {
  inProgressSelector,
  hasSucceededSelector,
  hasFailedSelector,
  factSelector,
};

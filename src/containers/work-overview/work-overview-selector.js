import { createSelector } from 'reselect';

export const workOverviewSelector = createSelector(
  [
    state => state.app.work.projects,
    state => state.router
  ],
  (projects) => {
    return {
      projects
    };
  }
);

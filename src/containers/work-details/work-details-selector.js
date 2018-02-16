import { createSelector } from 'reselect';


function getCurrentProject(projects, location) {
  const params = location.pathname.split('/');
  const key = params[params.length - 1];
  return projects.find(project => project.key === key)
}

export const workDetailsSelector = createSelector(
  [
    state => state.app.work.projects,
    state => state.router
  ],
  (projects, router) => {
    return {
      project: getCurrentProject(projects, router.location)
    };
  }
);

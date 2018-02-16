import { createSelector } from 'reselect';

// cache the current project. prevent component from rendering an empty page when going up one level in the nav
// we don't have an actual page state for the top level client menu
// TODO: figure out how to do this with React Router 4.x NavLinks. It seems a bit cumbersome. Alternatively set the current project in the reducer
let currentProject = null;

function getCurrentProject(projects, location) {
  const params = location.pathname.split('/');
  const key = params[params.length - 1];

  currentProject = projects.find(project => project.key === key) || currentProject;
  return currentProject;
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

import { createSelector } from 'reselect';

function getProjects(projects, props) {
  const currProjectIndex = projects.findIndex(project => project.id === props.match.params.project);
   return {
     currentProject: projects[currProjectIndex],
     nextProject: projects[currProjectIndex + 1]
   }
}

export function makeGetProjectsSelector() {
  return createSelector(
    [getProjects],
    (projects) => projects
  );
}

import { createSelector } from 'reselect';

function getCurrentProject(projects, props) {
 return projects.find(project => project.id === props.match.params.project)
}

export function makeGetCurrentProjectSelector() {
  return createSelector(
    [getCurrentProject],
    (currentProject) => currentProject
  );
}

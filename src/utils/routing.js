export function  getProjectLink(project, path = '/work') {
  return `${path}/${project.clientId}/${project.id}`
}

import { createSelector } from 'reselect';

function configureNav(items, work) {
  items.find(item => item.key === 'work').items = work;
  console.log(items)
  return items;
}

function getActiveKey(nav, location) {
  const paths = location.pathname.split('/');
  return paths[paths.length - 1];
}

export const navContainerSelector = createSelector(
  [
    state => state.app.data,
    state => state.app.work,
    state => state.router
  ],
  (data, work, router) => {
    const nav = configureNav(data.navItems, work);
    return {
      items: nav,
      pathname: router.location.pathname //getActiveKey(nav, router.location)
    };
  }
);

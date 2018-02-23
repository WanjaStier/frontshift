import { createSelector } from 'reselect';

function configureNav(items, work) {
 // items.find(item => item.key === 'work').items = work;

  return items;
}

export const headerContainerSelector = createSelector(
  [
    state => state.app.data,
    state => state.app.work,
    state => state.router
  ],
  (data, work, router) => {
    const nav = configureNav(data.navItems, work.clients);
    return {
      items: nav,
      pathname: router.location.pathname //getActiveKey(nav, router.location)
    };
  }
);

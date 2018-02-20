import { createSelector } from 'reselect';

function configureNav(items, work) {
 // items.find(item => item.key === 'work').items = work;
  console.log(items)
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
    console.log('update')
    return {
      items: nav,
      pathname: router.location.pathname //getActiveKey(nav, router.location)
    };
  }
);

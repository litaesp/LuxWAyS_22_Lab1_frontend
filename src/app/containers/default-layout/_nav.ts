import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'Bibliotheque',
    title: true
  },
  {
    name: 'Ma bibliotheque',
    url: '/pages/library',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  }
];

export const navItemsAdmin: INavData[] = [
  ...navItems,
  {
    name: 'Administration',
    title: true
  },
  {
    name: 'utilisateurs',
    url: '/admin/users',
    iconComponent: { name: 'cil-user' }
  },
];


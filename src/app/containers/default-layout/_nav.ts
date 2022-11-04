import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'MENU',
    title: true
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
];

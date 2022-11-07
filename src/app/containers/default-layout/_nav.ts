import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'MENU',
    title: true
  },
  {
    name: 'Bibliotheque',
    url: '/pages/library',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
];

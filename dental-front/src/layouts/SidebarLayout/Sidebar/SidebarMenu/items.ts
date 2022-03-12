import { ReactNode } from 'react';

import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Medical',
    items: [
      {
        name: 'Clinics',
        icon: BeachAccessTwoToneIcon,
        link: '/components/clinics'
      },
      {
        name: 'Users',
        icon: BallotTwoToneIcon,
        link: '/components/users'
      },
      {
        name: 'Patients',
        icon: EmojiEventsTwoToneIcon,
        link: '/components/patients'
      },
      {
        name: 'Services',
        icon: FilterVintageTwoToneIcon,
        link: '/components/services'
      },
    ]
  },
];

export default menuItems;

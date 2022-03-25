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
    heading: '',
    items: [
      {
        name: 'Хяналтын самбар',
        icon: EmojiEventsTwoToneIcon,
        link: '/components/dashboard'
      },
      {
        name: 'Эмнэлэг',
        icon: BeachAccessTwoToneIcon,
        link: '/components/clinics'
      },
      {
        name: 'Хэрэглэгчид',
        icon: BallotTwoToneIcon,
        link: '/components/users'
      },
      {
        name: 'Өвчтөнүүд',
        icon: EmojiEventsTwoToneIcon,
        link: '/components/patients'
      },
      {
        name: 'Үйлчилгээ',
        icon: FilterVintageTwoToneIcon,
        link: '/components/services'
      },
    ]
  },
];

export default menuItems;

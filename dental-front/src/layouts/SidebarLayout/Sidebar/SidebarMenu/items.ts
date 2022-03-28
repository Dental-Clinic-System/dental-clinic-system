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
        link: '/dashboard'
      },
      {
        name: 'Эмнэлэг',
        icon: BeachAccessTwoToneIcon,
        link: '/clinics'
      },
      {
        name: 'Хэрэглэгчид',
        icon: BallotTwoToneIcon,
        link: '/users'
      },
      {
        name: 'Өвчтөнүүд',
        icon: EmojiEventsTwoToneIcon,
        link: '/patients'
      },
      {
        name: 'Үйлчилгээ',
        icon: FilterVintageTwoToneIcon,
        link: '/services'
      },
    ]
  },
];

export default menuItems;

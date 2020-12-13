import React from 'react';

// import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';

import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';
import { ReactComponent as LoanIcon } from '../assets/loan.svg';
import { ReactComponent as ExchangeIcon } from '../assets/exchange.svg';
import { ReactComponent as GovernanceIcon } from '../assets/governance.svg';
import { ReactComponent as GuideIcon } from '../assets/guide.svg';
import { ReactComponent as FaucetIcon } from '../assets/faucet.svg';
import { SidebarConfig } from '../components/Sidebar';

export const sideBarConfig: SidebarConfig = {
  products: [
    {
      icon: <GovernanceIcon />,
      name: 'Marketplace',
      path: 'marketplace'
    },
    {
      icon: <ExchangeIcon />,
      name: 'Swap',
      path: 'swap'
    },
    {
      icon: <LoanIcon />,
      name: 'Explorer',
      path: 'explorer'
    },
  ],
  socialPlatforms: [
    {
      href: 'https://discord.gg/CmqXvMP',
      icon: <FaucetIcon />,
      name: 'Faucet',
      rel: 'faucet'
    },
    {
      href: 'https://github.com/AcalaNetwork/Acala/wiki',
      icon: <GuideIcon />,
      name: 'Wiki',
      rel: 'wiki'
    },
    {
      href: 'https://twitter.com/AcalaNetwork',
      icon: <TwitterIcon />,
      name: 'Twitter',
      rel: 'twitter'
    }
  ]
};

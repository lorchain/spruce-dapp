import React, { FC, lazy, Suspense } from 'react';

import { PageContentLoading } from '../components';

import { Layout } from '../components';
import { sidebarConfig } from './sidebarConfig';
import { RouterConfigData } from  '../components';

const PageMarketplace = lazy(() => import('../pages/Marketplace'));
const PageSwap = lazy(() => import('../pages/Swap'));
const PageExplorer = lazy(() => import('../pages/Explorer'));
// import PageHome from '../pages/Home';
// import PageSwap from '../pages/Swap';

const CSuspense: FC = ({ children }) => {
  return (
    <Suspense fallback={<PageContentLoading />}>
      {children}
    </Suspense>
  );
};

export const routerConfig: RouterConfigData[] = [
  {
    children: [
      {
        element: <CSuspense><PageMarketplace/></CSuspense>,
        path: 'marketplace',
        title: 'Marketplace'
      },
      {
        element: <CSuspense><PageSwap /></CSuspense>,
        path: 'swap/*',
        title: 'Swap'
      },
      {
        element: <CSuspense><PageExplorer /></CSuspense>,
        path: 'explorer/*',
        title: 'Explorer'
      },
      {
        path: '*',
        redirectTo: 'marketplace'
      }
    ],
    element: <Layout sidebar={sidebarConfig}/>,
    path: '*'
  }
];

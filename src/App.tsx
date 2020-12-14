import React from 'react';
import { UIProvider } from './context';
import { AppProvider, RouterProvider } from './components';
import { routerConfig } from './config/routerConfig';

export default () => {
  return (
    <UIProvider>
      <AppProvider applicationName={'Spruce Dapp'}>
        <RouterProvider config={routerConfig}/>
      </AppProvider>
    </UIProvider>
  );
};

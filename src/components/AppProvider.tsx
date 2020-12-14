import React, { FC } from 'react';

import { ConnectStatus, AppSettings } from '../components';
import { BareProps } from '../components/types';

import { ApiProvider, SettingProvider, ExtensionProvider } from '../context';
// import { SettingProvider } from './SettingContext';
// import { RxStoreProvider } from './RxStore';
// import { StoreProvier } from './store';
// import { ExtensionProvider } from './ExtensionContext';

interface AppProviderProps extends BareProps {
  applicationName: string;
  applicationVersion?: string;
}

export const AppProvider: FC<AppProviderProps> = ({
  applicationName = 'App Dapp',
  children
}) => {
  console.log('app name', applicationName);
  return (
    <SettingProvider>
      <ApiProvider>
        <ExtensionProvider appName={applicationName}>
          {/* <StoreProvier>
            <RxStoreProvider> */}
              <>
                {children}
                <ConnectStatus />
                <AppSettings />
              </>
            {/* </RxStoreProvider>
          </StoreProvier> */}
        </ExtensionProvider>
      </ApiProvider>
    </SettingProvider>
  );
};

import React, { FC } from 'react';

import { ConnectStatus, AppSettings } from '../../components';
import { BareProps } from '../../components/types';

import { ApiProvider } from './ApiProvider';
import { SettingProvider } from './SettingProvider';
// import { RxStoreProvider } from './RxStore';
// import { StoreProvier } from './store';
import { ExtensionProvider } from './ExtensionProvider';

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

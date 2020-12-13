import React, { ReactNode, FC, useState, useEffect, useCallback, useRef } from 'react';
import { Subscription } from 'rxjs';
import { timeout } from 'rxjs/operators';

import { ApiPromise, WsProvider } from '@polkadot/api';
// import { options } from '@acala-network/api';
import { options } from '../../config/NetworkConfig';

const MAX_CONNECT_TIME = 1000 * 60; // one minute

export interface ApiContextData {
  api: ApiPromise;
  connected: boolean;
  error: boolean;
  loading: boolean;
  chainInfo: {
    chainName: string;
  };
  init: (endpoint: string, allEndpoint: string[]) => void; // connect to network
}

// ensure that api always exist
export const ApiContext = React.createContext<ApiContextData>({} as ApiContextData);

interface Props {
  children: ReactNode;
}

/**
 * @name ApiProvider
 * @description context provider to support initialized api and chain information
 */
export const ApiProvider: FC<Props> = ({
  children
}) => {
  console.log('api provider');
  // api instance
  const [api, setApi] = useState<ApiPromise>({} as ApiPromise);

  // chain information
  const [chainName, setChainName] = useState<string>('');

  // status
  const [connected, setConnected] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  // const apiSubscriber = useRef<Subscription>();

  const init = useCallback((endpoint: string, allEndpoints: string[]) => {
    console.log('111');
    console.log('api', api);
    // if (apiSubscriber.current) return;
    // if (api) {
    //   return;
    // }
    console.log('222');
    console.log('endpoint', endpoint);
    console.log('allEndpoints', allEndpoints);

    const provider = new WsProvider([endpoint, ...allEndpoints]);

    ApiPromise.create(options({ provider }))
      .then((result) => {
        console.log('result', result);
        setApi(result);
        setConnected(true);
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        console.log('error');
        setConnected(false);
        setError(true);
        setLoading(false);
      });

    // apiSubscriber.current = ApiPromise.create(options({ provider })).pipe(
    //   timeout(MAX_CONNECT_TIME)
    // ).subscribe({
    //   error: (): void => {
    //     setConnected(false);
    //     setError(true);
    //     setLoading(false);
    //   },
    //   next: (result): void => {
    //     setApi(result);
    //     setConnected(true);
    //     setError(false);
    //     setLoading(false);
    //   }
    // });
  }, []);

  useEffect(() => {
    if (!connected) return;

    api.rpc.system.chain().then((result) => {
      setChainName(result.toString());
    });
  }, [api, connected]);

  useEffect(() => {
    if (!connected) return;

    api.on('disconnected', () => {
      setConnected(false);
      setError(false);
    });
    api.on('error', () => {
      setConnected(false);
      setError(true);
    });
    api.on('connected', () => {
      setConnected(true);
      setError(false);
    });
  }, [api, connected, error]);

  return (
    <ApiContext.Provider
      value={{
        api,
        chainInfo: {
          chainName
        },
        connected,
        error,
        init,
        loading
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};


// import { useMemo } from 'react';
// import { Vec } from '@polkadot/types';
// import { Codec } from '@polkadot/types/types';

import { useApi } from './useApi';

export type HooksReturnType = {
  [key: string]: any;
}

export const useConstants = (): HooksReturnType => {
  const { api } = useApi();

  return {
    ...api.consts
  };
};

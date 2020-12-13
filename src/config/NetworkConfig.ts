import { ApiOptions } from '@polkadot/api/types';

const spruceTypes = {
  Address: 'AccountId',
  LookupSource: 'AccountId'
};

const spruceRpc = {};


export const defaultOptions: ApiOptions = {
  types: spruceTypes,
  rpc: spruceRpc
};

export const options = ({
  types = {},
  rpc = {},
  typesAlias = {},
  typesBundle = {},
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    ...spruceTypes,
    ...types
  },
  rpc: {
    ...spruceRpc,
    ...rpc
  },
  typesAlias: {
    ...typesAlias
  },
  derives: {

  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
    }
  },
  ...otherOptions
});

import { ApiOptions } from '@polkadot/api/types';

const spruceTypes = {
  Address: 'AccountId',
  LookupSource: 'AccountId',
  TokenId: 'u64',
  TokenBalance: 'u128',
  CommodityId: 'u64',
  TaoId: 'u64',
  ExchangeId: 'u64',
  CurrencyId: 'u64',
  CollectionId: 'u64',
  AssetId: 'u64',
  NftIndex: 'u64',
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

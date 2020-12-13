import React, { Dispatch, useReducer } from 'react';
import PropTypes from 'prop-types';
import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import * as queryString from 'query-string';
import config from '../config/ChainConfig';

const parsedQuery = queryString.parse(window.location.search);
const connectedSocket = parsedQuery.rpc || config.PROVIDER_SOCKET;
console.log(`Connected socket: ${connectedSocket}`);

export interface IState {
  socket: any,
  jsonrpc: any,
  types: any,
  keyring: any,
  keyringState: any,
  api: any,
  apiError: any,
  apiState: any
}

interface Actions {
  type: string;
  payload: any;
}

interface IContextProps {
  state: IState;
  dispatch: Dispatch<Actions>;
}

const defaultState: IState = {
// const initialState: IState = {
  socket: connectedSocket,
  jsonrpc: { ...jsonrpc, ...config.RPC },
  types: config.CUSTOM_TYPES,
  keyring: null,
  keyringState: null,
  api: null,
  apiError: null,
  apiState: null
};

// const reducer: Reducer<IState, Actions> = (state, action) => {
const reducer = (state: IState, action: Actions) => {
  let socket = null;

  console.log('111 state', state);
  console.log('222 action', action);
  switch (action.type) {
    case 'RESET_SOCKET':
      socket = action.payload || state.socket;
      return { ...state, socket, api: null, apiState: null };

    case 'CONNECT':
      return { ...state, api: action.payload, apiState: 'CONNECTING' };

    case 'CONNECT_SUCCESS':
      return { ...state, apiState: 'READY' };

    case 'CONNECT_ERROR':
      return { ...state, apiState: 'ERROR', apiError: action.payload };

    case 'SET_KEYRING':
      return { ...state, keyring: action.payload, keyringState: 'READY' };

    case 'KEYRING_ERROR':
      return { ...state, keyring: null, keyringState: 'ERROR' };

    default:
      throw new Error(`Unknown type: ${action.type}`);
  }
};

const ApiContext = React.createContext({} as IContextProps);

const ApiContextProvider = (props: any) => {
  // filtering props and merge with default param value
  const initialState: any = { ...defaultState };
  const neededPropNames = ['socket', 'types'];
  neededPropNames.forEach(key => {
    initialState[key] = (typeof props[key] === 'undefined' ? initialState[key] : props[key]);
  });
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <ApiContext.Provider value={value}>
      {props.children}
    </ApiContext.Provider>
  );
};

// prop typechecking
ApiContextProvider.propTypes = {
  socket: PropTypes.string,
  types: PropTypes.object
};

export { ApiContext, ApiContextProvider };

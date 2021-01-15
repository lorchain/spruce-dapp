import React from 'react';
// import { useApi } from '../../hooks';
import NodeInfo from '../../components/NodeInfo';
import AccountSelector from '../../components/AccountSelector';

export default () => {
  // const { api } = useApi();

  return (
    <div>
      <h1>Page explorer</h1>
      <NodeInfo />
      <AccountSelector />
    </div>
  );
};

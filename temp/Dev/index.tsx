import React from 'react';
import NodeInfo from '../../src/components/NodeInfo';
import BlockNumber from '../../src/components/BlockNumber';
import Balances from '../../src/components/Balances';
import Transfer from '../../src/components/Transfer';
import Transfer2 from '../../components/Transfer2';
import useApi from '../../src/hooks/useApi';

export default () => {
  const { api, keyring } = useApi();

  return (
    <div>
      <h1>Page Dev</h1>

      <NodeInfo
        api={api}
      />
      <BlockNumber finalized />
      <Balances
        api={api}
        keyring={keyring}
      />
      <Transfer
        api={api}
        keyring={keyring}
      />
      <Transfer2
        keyring={keyring}
      />
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';
import { ApiPromise } from '@polkadot/api';
import { useApi } from '../hooks';

import type { Vec } from '@polkadot/types';
import type { BlockNumber, Extrinsic, Health, PeerInfo } from '@polkadot/types/interfaces';

const POLL_TIMEOUT = 9900;

export interface Info {
  blockNumber?: BlockNumber;
  extrinsics?: Vec<Extrinsic> | null;
  health?: Health | null;
  peers?: PeerInfo[] | null;
}

type Props = {
  api: ApiPromise;
};

type NodeInfoType = {
  chain?: string;
  nodeName?: string;
  nodeVersion?: string;
};

async function retrieveInfo (api: ApiPromise): Promise<Partial<Info>> {
  try {
    const [blockNumber, health, peers, extrinsics] = await Promise.all([
      api.derive.chain.bestNumber(),
      api.rpc.system.health().catch(() => null),
      api.rpc.system.peers().catch(() => null),
      api.rpc.author.pendingExtrinsics().catch(() => null)
    ]);

    return { blockNumber, extrinsics, health, peers };
  } catch (error) {
    return {};
  }
}

export default function NodeInfo (): React.ReactElement {
  const { api } = useApi();
  console.log('nodeinfo', api);
  const [info, setInfo] = useState<Partial<Info>>({});
  const [nextRefresh, setNextRefresh] = useState(Date.now());

  useEffect((): () => void => {
    const _getStatus = (): void => {
      retrieveInfo(api).then(setInfo).catch(console.error);
    };

    _getStatus();

    const timerId = window.setInterval((): void => {
      setNextRefresh(Date.now() + POLL_TIMEOUT);
      _getStatus();
    }, POLL_TIMEOUT);

    return (): void => {
      window.clearInterval(timerId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>block info</h1>
    </div>
    // <Grid.Column>
    //   <Card>
    //     <Card.Content>
    //       <Card.Header>{info.blockNumber}</Card.Header>
    //       <Card.Meta>
    //         <span>{info.extrinsics}</span>
    //       </Card.Meta>
    //     </Card.Content>
    //     <Card.Content extra>
    //       {/* <Icon name='setting' />v{info.nodeVersion} */}
    //     </Card.Content>
    //   </Card>
    // </Grid.Column>


    // <>
    //   <Summary
    //     info={info}
    //     nextRefresh={nextRefresh}
    //   />
    //   <Peers peers={info.peers} />
    //   <Extrinsics
    //     blockNumber={info.blockNumber}
    //     label={t<string>('pending extrinsics')}
    //     value={info.extrinsics}
    //   />
    // </>
  );
}


// export default function NodeInfo (props: Props): JSX.Element {
//   const { api } = props;
//   const [nodeInfo, setNodeInfo] = useState<NodeInfoType>({});

//   useEffect(() => {
//     Promise.all([
//       api.rpc.system.chain(),
//       api.rpc.system.name(),
//       api.rpc.system.version()
//     ])
//       .then(([_chain, _nodeName, _nodeVersion]) => {
//         setNodeInfo({
//           chain: _chain.toString(),
//           nodeName: _nodeName.toString(),
//           nodeVersion: _nodeVersion.toString()
//         });
//       })
//       .catch((e) => console.error(e));
//   }, [api.rpc.system]);

//   return (
//     <Grid.Column>
//       <Card>
//         <Card.Content>
//           <Card.Header>{nodeInfo.nodeName}</Card.Header>
//           <Card.Meta>
//             <span>{nodeInfo.chain}</span>
//           </Card.Meta>
//         </Card.Content>
//         <Card.Content extra>
//           <Icon name='setting' />v{nodeInfo.nodeVersion}
//         </Card.Content>
//       </Card>
//     </Grid.Column>

//     // <>
//     //   {nodeInfo.chain} - {nodeInfo.nodeName} (v{nodeInfo.nodeVersion})
//     //   <hr/>
//     // </>
//   );
// }
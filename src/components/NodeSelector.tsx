// import React, { useState, useContext } from 'react';
// import { Select } from 'antd';
// import styled from 'styled-components';
// // import useApi from '../hooks/useApi';
// import { useApi } from '../hooks';
// import { ApiContext } from '../context/ApiContext';
// import dev from '../config/ChainConfig/development.json';
// import prod from '../config/ChainConfig/production.json';

// interface Props {
//   className?: string;
// }

// function NodeSelectorApp ({ className = ''}: Props): React.ReactElement<Props> {
//   const { socket } = useApi();
//   const [currentSocket, setCurrentSocket] = useState(socket);
//   const { dispatch } = useContext(ApiContext);

//   const nodeOptions = [
//     {
//       key: 'dev',
//       value: dev.PROVIDER_SOCKET,
//       text: `${dev.PROVIDER_SOCKET} (Local)`,
//     },
//     {
//       key: 'prod',
//       value: prod.PROVIDER_SOCKET,
//       text: `${prod.PROVIDER_SOCKET} (Hosted)`,
//     },
//   ];

//   const onChange = (newSocket: any) => {
//     setCurrentSocket(newSocket);
//     dispatch(
//       {
//         type: 'RESET_SOCKET',
//         payload: newSocket
//       }
//     );
//   };

//   return (
//     <div className={className}>
//       <Select
//         className='nodeSelect'
//         bordered={false}
//         options={nodeOptions}
//         onChange={onChange}
//         value={currentSocket}
//       />
//     </div>
//   );
// }

// export default React.memo(styled(NodeSelectorApp)`
//   .nodeSelect {
//     width: 251px;
//   }
// `);

export {};

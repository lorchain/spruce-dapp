// import React, { useEffect, useContext } from 'react';
// import { Select } from 'antd';
// import Identicon from '@polkadot/react-identicon';
// // import useApi from '../hooks/useApi';
// import { useApi } from '../hooks';
// import { AccountContext } from '../context/AccountContext';
// import shorten from '../utils/address';


// function Main () {
//   const { keyring } = useApi();
//   const { account, setAccount } = useContext(AccountContext);

//   // Get the list of accounts we possess the private key for
//   const keyringOptions = keyring.getPairs().map((account: any) => ({
//     key: account.address,
//     value: account.address,
//     label: shorten(account.address),
//     icon: <Identicon value={account.address} theme={'jdenticon'} size={20} style={{ paddingRight: 10}}/>
//   }));

//   const initialAddress =
//     keyringOptions.length > 0 ? keyringOptions[0].value : '';

//   // Set the initial address
//   useEffect(() => {
//     setAccount(initialAddress);
//   }, [initialAddress, setAccount]);

//   const onChange = (address: any) => {
//     // Update state with new account address
//     setAccount(address);
//   };

//   return (
//     <div>
//       <Select
//         style={{ width: 200 }}
//         bordered={false}
//         onChange={onChange}
//         value={account}
//       >
//         {
//           keyringOptions.map((keyring: any) => (
//             <Select.Option value={keyring.account} key={keyring.key}>
//               {keyring.icon} {keyring.label}
//             </Select.Option>
//           ))
//         }
//       </Select>
//     </div>
//   );
// }

// export default function AccountSelector () {
//   const { api, keyring } = useApi();
//   return keyring.getPairs && api.query ? <Main /> : null;
// }

export {};

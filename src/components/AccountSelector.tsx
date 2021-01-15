import React, {useEffect, useState} from 'react';
import Identicon from '@polkadot/react-identicon';
import keyring from '@polkadot/ui-keyring';
import { Select } from 'antd';


function AccountSelector () {
  const [ account, setAccount ] = useState('');

  const keyringOptions = keyring.getAccounts().map((item) => ({
    key: item.address,
    value: item.address,
    label: item.meta.name,
    icon: <Identicon value={item.address} theme={'jdenticon'} size={20} style={{ paddingRight: 10}}/>
  }));

  const initialAddress = keyringOptions.length > 0 ? keyringOptions[0].value : '';

  // Set the initial address
  useEffect(() => {
    setAccount(initialAddress);
  }, [initialAddress, setAccount]);

  const onChange = (address: string) => {
    console.log('address', address);
    // Update state with new account address
    setAccount(address);
  };

  return (
    <div>
      <Select
        style={{ width: 300 }}
        bordered={false}
        onChange={onChange}
        value={account}
      >
        {
          keyringOptions.map((keyring: any) => (
            <Select.Option value={keyring.account} key={keyring.key}>
              {keyring.icon} {keyring.label}
            </Select.Option>
          ))
        }
      </Select>
    </div>
  );
}

export default AccountSelector;

import React, { useState, useCallback, useEffect } from 'react';

import Identicon from '@polkadot/react-identicon';
// import { Dialog } from '@acala-dapp/ui-components';
import { Modal } from 'antd';

import { ReactComponent as CheckedIcon } from './assets/checked.svg';
// import classes from './SelectAccount.module.scss';
// import './SelectAccount.css';
import { InjectedAccount } from '@polkadot/extension-inject/types';
import styled from 'styled-components';

// interface Props {
//   defaultAccount?: string;
//   accounts: InjectedAccount[];
//   visable: boolean;
//   onSelect?: (account: InjectedAccount) => void;
//   onCancel: () => void;
// }

interface Props {
  className?: string;
  defaultAccount?: string;
  accounts: InjectedAccount[];
  visable: boolean;
  onSelect?: (account: InjectedAccount) => void;
  onCancel: () => void;
}

function SelectAccount ({ className = '', accounts, defaultAccount, onCancel, onSelect, visable }: Props): React.ReactElement<Props> | null {

// export const SelectAccount: React.FC<Props> = ({
//   accounts,
//   defaultAccount,
//   onCancel,
//   onSelect,
//   visable
// }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const confirmHandler = useCallback(() => {
    onSelect && onSelect(accounts[selectedIndex]);
  }, [onSelect, accounts, selectedIndex]);

  useEffect(() => {
    if (!defaultAccount || !accounts.length) return;

    const defaultIndex = accounts.findIndex((item) => item.address === defaultAccount);

    setSelectedIndex(defaultIndex);
  }, [defaultAccount, accounts, setSelectedIndex]);

  return (
    <Modal
      className={className}
      onCancel={onCancel}
      onOk={confirmHandler}
      title='Choose Account'
      visible={visable}
      closable={false}
    >
      <ul className='list'>
        {
          accounts.map((item, index) => {
            return (
              <li
                className='item'
                key={`account-${item.address}`}
                onClick={(): void => setSelectedIndex(index)}
              >
                <Identicon
                  className='icon'
                  size={16}
                  value={item.address}
                />
                <p className='account'>{item.name}</p>
                <div className='checked'>
                  {
                    selectedIndex === index ? <CheckedIcon /> : null
                  }
                </div>
              </li>
            );
          })
        }
      </ul>
    </Modal>
  );
}

export default React.memo(styled(SelectAccount)`
  .list {
    max-height: 500px;
    list-style: none;
    border-radius: 2px;
    border: 1px solid #ecf0f2;
    overflow: auto;
  }

  .item {
    position: relative;
    display: flex;
    font-size: 16px;
    line-height: 19px;
    padding: 14px 16px;
    cursor: pointer;
    transition: background 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      height: 1px;
      width: calc(100% - 50px);
      background: #ecf0f2;
    }

    &:hover {
      background: #f2f5f7;
    }

    &:last-child::after {
      display: none;
    }
  }

  .icon {
    margin-right: 16px;
  }

  .account {
    flex: 1;
  }

  .checked {
    width: 16px;
  }
`);

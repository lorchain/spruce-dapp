import React, { FC } from 'react';
import clsx from 'clsx';

import { useApi, useModal } from '../hooks';
import { BareProps } from './types';
// import { Skeleton } from './Skeleton';
import { Skeleton } from 'antd';

import { ReactComponent as NetworkIcon } from './assets/network.svg';
import { ReactComponent as AcalaIcon } from './assets/aca-network.svg';
// import './ChainName.css';
// import classes from './ChainName.module.scss';
import SelectNetwork from './SelectNetwork';
import styled from 'styled-components';

// interface ChainNameProps extends BareProps {
//   collapse: boolean;
// }

interface Props {
  className?: string;
  collapse: boolean;
}

function ChainName ({ className = '', collapse }: Props): React.ReactElement<Props> | null {

// export const ChainName: FC<ChainNameProps> = ({ className, collapse }) => {
  const { chainInfo, loading } = useApi();
  const { close, open: openChainSelector, status } = useModal();

  return (
    <>
      <div
        className={className}
        onClick={openChainSelector}
      >
        {
          loading || !chainInfo?.chainName ? (
            <Skeleton.Button
              active
              className='skeleton'
              size='small'
            />
          ) : (
            <>
              <NetworkIcon className='networkIcon' />
              {
                collapse ? null : (
                  <div className='chainName'>
                    <AcalaIcon className='chainIcon' />
                    {chainInfo.chainName}
                  </div>
                )
              }
            </>
          )
        }
      </div>
      <SelectNetwork
        onClose={close}
        visiable={status}
      />
    </>
  );
}

export default React.memo(styled(ChainName)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  .skeleton {
    width: 100%;
  }

  .chainName {
    display: flex;
    align-items: center;
    padding: 4px 8px;

    background: #FFFFFF;
    border: 1px solid rgba(23,61,201,0.20);
    box-shadow: 0 0 4px 0 rgba(6,35,96,0.06);
    border-radius: 11.5px;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-primary);
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
      background: var(--color-primary);
      color: var(--color-white);
    }
  }

  .networkIcon {
    margin-right: 8px;
  }

  .chainIcon {
    display: block;
    margin-right: 4.5px;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    box-shadow: 0 0 4px rgba(23, 65, 212, 0.18);
  }
`);

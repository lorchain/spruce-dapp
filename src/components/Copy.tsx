import React, { FC, ReactNode, useCallback } from 'react';
import clsx from 'clsx';
import { CopyOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';

import { notification } from 'antd';
import { BareProps } from './types';
// import './Copy.css';
// import classes from './Copy.module.scss';
import styled from 'styled-components';

// interface Props extends BareProps {
//   text: string;
//   display?: string;
//   render?: () => ReactNode;
//   withCopy?: boolean;
// }

interface Props {
  className?: string;
  text: string;
  display?: string;
  render?: () => ReactNode;
  withCopy?: boolean;
}

function Copy ({ className = '', display, render, text, withCopy = true }: Props): React.ReactElement<Props> | null {

// export const Copy: FC<Props> = ({
//   className,
//   display,
//   render,
//   text,
//   withCopy = true
// }) => {
  const handleCopy = useCallback((): void => {
    notification.success({
      message: display || `copy ${text} success`
    });
  }, [display, text]);

  if (withCopy) {
    return (
      <span className={className}>
        { render ? render() : text }
        {
          withCopy ? (
            <CopyToClipboard
              onCopy={handleCopy}
              text={text}
            >
              <CopyOutlined style={{ marginLeft: 6 }} />
            </CopyToClipboard>
          ) : null
        }
      </span>
    );
  }

  return (
    <CopyToClipboard
      onCopy={handleCopy}
      text={text}
    >
      <span className={className}>
        { render ? render() : text }
        { withCopy ? <CopyOutlined style={{ marginLeft: 6 }} /> : null }
      </span>
    </CopyToClipboard>
  );
}

export default React.memo(styled(Copy)`
  display: flex;
  align-items: center;

  > svg {
    margin-left: 8px;
    width: 16px;
    cursor: pointer;
  }
`);

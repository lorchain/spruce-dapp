import React from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { ChainName } from '../ChainName';
import { AccountBar } from '../AccountBar';
import './index.css';

export interface Props {
  collapse?: boolean;
  onCollapse?: () => void;
  isMobile?: boolean;
  logo?: React.ReactNode;
}

const onSearch = (value: string) => {
  console.log(value);
};

export default ({ collapse, onCollapse }: Props) => {
  return (
    <div className='header'>
      <div
        className='trigger'
        onClick={onCollapse}
      >
        <MenuOutlined />
      </div>
      <div className='logo'>
        <h1>Spruce</h1>
      </div>
      <ChainName collapse={true}/>
      <div className='search'>
          {/* <Input size="large" placeholder="Search" prefix={<SearchOutlined />} /> */}
          <Input.Search placeholder="input search text" onSearch={onSearch} enterButton />
      </div>

      <div className='account'>
        <AccountBar />
      </div>
    </div>
  );
};

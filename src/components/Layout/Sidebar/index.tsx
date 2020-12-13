import React from 'react';
import { Menu } from 'antd';
// import { Link } from 'umi';
import { Link } from 'react-router-dom';


import { PieChartOutlined } from '@ant-design/icons';

const menuData = [
  { route: '', name: 'Home', icon: PieChartOutlined },
  { route: 'tao', name: 'Tao', icon: PieChartOutlined },
  { route: 'commodity', name: 'Commodity', icon: PieChartOutlined },
  { route: 'token', name: 'Token', icon: PieChartOutlined },
  { route: 'dex', name: 'Dex', icon: PieChartOutlined },
  { route: 'snake', name: 'Snake', icon: PieChartOutlined },
  { route: 'poker', name: 'Poker', icon: PieChartOutlined },
];

export default () => {
  return (
    <Menu
      // theme="light"
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      {menuData.map(menu => (
        <Menu.Item key={`/${menu.route}`} icon={<menu.icon />}>
          <Link to={menu.route}>{menu.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

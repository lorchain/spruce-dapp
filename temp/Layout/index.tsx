import React, { useEffect, useState, useContext } from 'react';
import { Layout, Drawer } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import HeaderContent from './Header';
import './index.css';
import Menu from './Sidebar';
// import AccountSelector from '../AccountSelector';
// import NodeSelector from '../NodeSelector';

const { Header, Sider, Content } = Layout;

export default (props: any) => {

  const [collapse, setCollapse] = useState(false);

  // const onCollapse = (value: any) => {
  //   console.log(value);
  //   setCollapse(value);
  // };

  const onCollapse = () => {
    console.log('111');
    setCollapse(!collapse);
  };

  return (
    <div>
      {/* <Loader /> */}
      <Layout className="container">
        <Header className="layoutHeader">
          <HeaderContent 
            collapse={collapse}
            onCollapse={onCollapse}
          />
        </Header>
        <Layout>
          <Sider
            className="layoutSider"
            trigger={null}
            collapsible
            collapsed={collapse}
            // onCollapse={onCollapse}
          >
            {/* {React.createElement(MenuOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}

            <div className="logo">
              <h1>Spruce</h1>
            </div>
            <br /> */}
            <Menu />
          </Sider>
          <Content className="content">{props.children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

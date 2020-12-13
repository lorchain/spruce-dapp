import React, { FC, memo, useMemo, useEffect, useState, useContext } from 'react';
import { Layout, Drawer } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import HeaderContent from './Header';
import './index.css';
import Menu from './Sidebar';
import { PageLoading } from '../../components';
import { useApi, useIsAppReady, useSetting } from '../../hooks';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

interface MainLayoutProps {
  // sidebar: SidebarConfig;
  enableCollapse?: boolean;
}

const Main: FC<MainLayoutProps> = memo(({
  children,
  enableCollapse = true,
}) => {
  const { init } = useApi();
  const { allEndpoints, endpoint } = useSetting();
  const isAppReady = useIsAppReady();
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    console.log('layout enpoint', endpoint);
    if (!endpoint) return;

    console.log('ready', isAppReady);
    if (isAppReady) return;

    // initialize api
    init(endpoint, allEndpoints);
  }, [init, endpoint, allEndpoints, isAppReady]);

  const onCollapse = () => {
    console.log('111');
    setCollapse(!collapse);
  };

  const content = useMemo(() => {
    if (!isAppReady) return <PageLoading />;

    return (
      <Content className="content">{children}</Content>
    );
  }, [isAppReady, children]);

  return (
    <MainContainer>
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

            <Menu />
          </Sider>
          {content}
        </Layout>
      </Layout>
    </MainContainer>
  );
});

export default Main;

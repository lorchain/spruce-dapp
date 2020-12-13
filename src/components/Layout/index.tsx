import React, { FC, memo, useMemo, useEffect, useState, useContext } from 'react';
import Header from '../Header';
import { Sidebar, SidebarConfig } from '../Sidebar';
import { Page, PageLoading } from '../../components';
import { useApi, useIsAppReady, useSetting } from '../../hooks';
// import styled from 'styled-components';
import './index.css';

// const MainContainer = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
// `;

interface MainLayoutProps {
  sidebar: SidebarConfig;
  enableCollapse?: boolean;
}

const Main: FC<MainLayoutProps> = memo(({
  children,
  enableCollapse = true,
  sidebar
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
    setCollapse(!collapse);
  };

  const content = useMemo(() => {
    if (!isAppReady) return <PageLoading />;

    return (
     <Page>
       <Page.Content>{children}</Page.Content>
     </Page>
    );
  }, [isAppReady, children]);


  return (
    <div className='container'>
      <Header 
        collapse={collapse}
        onCollapse={onCollapse}
      />
      <div className='contentContainer'>
        <Sidebar
          collapse={collapse}
          config={sidebar}
          showAccount={true}
        />
        {content}
      </div>
    </div>
  );

  // return (
  //   <MainContainer>
  //     {/* <Header className="layoutHeader">
  //       <HeaderContent 
  //         collapse={collapse}
  //         onCollapse={onCollapse}
  //       />
  //     </Header> */}
  //       <HeaderContainer>
  //         <HeaderContent 
  //           collapse={collapse}
  //           onCollapse={onCollapse}
  //         />
  //       </HeaderContainer>
  //     <Sidebar
  //       collapse={collapse}
  //       config={sidebar}
  //       showAccount={true}
  //     />
  //     {content}
  //   </MainContainer>
  // );
});

export default Main;

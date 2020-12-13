import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
// import Node from '../../NodeSelector';
// import Account from '../../AccountSelector';
// import Menu from '../Sidebar';
// import styles from './index.less';
import styled from 'styled-components';
import './index.css';
import { ChainName } from '../../ChainName';
import { AccountBar } from '../../AccountBar';

export interface Props {
  collapse?: boolean;
  onCollapse?: () => void;
  isMobile?: boolean;
  logo?: React.ReactNode;
}

export default ({ collapse, onCollapse }: Props) => {
  // const [collapse, setCollapse] = useState(true);

  // const toggle = () => {
  //   console.log('111');
  //   setCollapse(!collapse);
  // };


  return (
    // <HeaderBar>
    <div className="header">
      {/* <div className={styles.logo}>
        <h1>Spruce</h1>
      </div> */}
      {/* <Node />
      <Menu /> */}
      {/* {React.createElement(MenuOutlined, {
                className: 'trigger',
                onClick: onCollapse
              })} */}

      <Trigger
        onClick={onCollapse}
      >
        <MenuOutlined />
      </Trigger>
        <div className="logo">
          <h1>Spruce</h1>
        </div>
      {/* <Node />
      <Account/> */}
      <ChainName collapse={true}/>
      <AccountBar />
      </div>
  );
};

const HeaderBar = styled.div`
  top: 0px;
  right: 0;
  width: 100%;
  height: 0px;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 64px;
  line-height: 58px;
  vertical-align: top;
  display: inline-block;
  padding: 10px 0px 0px 0px;
  cursor: pointer;
  font-size: 16px;

  img {
    display: inline-block;
    vertical-align: middle;
  }
`;

const Trigger = styled.div`
  font-size: 20px;
  line-height: 20px;
  width: 10px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
  padding: 20px 100px;
  background: blue;
`;

import React, { FC } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Row, Col, Alert } from 'antd';
import {
  ApiContextProvider,
  AccountContextProvider,
} from '../../context';
// import useApi from '../../hooks/useApi';
import { useApi } from '../../hooks';
import { BareProps } from '../types';
import './App.css';

type Props = BareProps

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const AppProvider: FC<Props> = ({ children }) => {
  const { apiState, keyringState, apiError } = useApi();

  const Loader = (text: any) =>
    <div style={{textAlign: 'center'}}>
      <Spin
        indicator={antIcon}
        tip={text}
      />
    </div>;

  const Message = (err: any) =>
    <Row justify='center'>
      <Col>
        <Alert
          message='Error Connecting to the Node'
          description={`${err}`}
          type="error"
        />
      </Col>
    </Row>;

  if (apiState === 'ERROR') {
    return Message(apiError);
  } else if (apiState !== 'READY') {
    return Loader('Connecting to the Node');
  }

  if (keyringState !== 'READY') {
    return Loader('Loading accounts (please review any extension\'s authorization)');
  }

  return (
    <ApiContextProvider>
      <AccountContextProvider>
        {children}
      </AccountContextProvider>
    </ApiContextProvider>
  );

  // const contextRef = createRef<HTMLDivElement>();

  // return (
  //   <div ref={contextRef}>
  //     {children}
  //   </div>
  // );
};

// export default () => {
//     return (
//       <ApiContextProvider>
//         <AccountContextProvider>
//           <Main />
//         </AccountContextProvider>
//       </ApiContextProvider>
//     );
// };

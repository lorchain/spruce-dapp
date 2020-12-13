import React from 'react';
// import logo from './logo.svg';
import style from './App.module.scss';
import styled from 'styled-components';
// import Test from './components/Test';
// import Layout from './components/Layout';
import { config as routerConfig } from './config/RouterConfig';
import { UIProvider, AppProvider, RouterProvider } from './components';
import PageSwap from './pages/Swap';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    // <Color>
    //   <h1>Color test</h1>
    // </Color>
    // </div>
    // <Layout />

    <UIProvider>
      <AppProvider applicationName={'Spruce Dapp'}>
        <RouterProvider config={routerConfig}/>
      </AppProvider>
    </UIProvider>
    // <div className={style.root}>
    //   <h1>hello</h1>
    // </div>
    // <PageSwap />
  );
}

const Color = styled.div`
  background: red;
  .ui--Swap-page {
    background: blue;
  }
`;

export default App;


// import React, { createRef } from 'react';
// import { HashRouter, Route } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
// import { LoadingOutlined } from '@ant-design/icons';
// import { Spin, Row, Col, Alert } from 'antd';
// import {
//   ApiContextProvider,
//   AccountContextProvider,
//   EventsContextProvider,
// } from './context';
// import Home from './pages/Home';
// import Dev from './pages/Dev';
// import useApi from './hooks/useApi';
// import './App.css';

// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

// function Main (props: any) {
//   const { apiState, keyringState, apiError } = useApi();

//   const Loader = (text: any) =>
//     <div style={{textAlign: 'center'}}>
//       <Spin
//         indicator={antIcon}
//         tip={text}
//       />
//     </div>;

//   const Message = (err: any) =>
//     <Row justify='center'>
//       <Col>
//         <Alert
//           message='Error Connecting to the Node'
//           description={`${err}`}
//           type="error"
//         />
//       </Col>
//     </Row>;

//   if (apiState === 'ERROR') {
//     return Message(apiError);
//   } else if (apiState !== 'READY') {
//     return Loader('Connecting to the Node');
//   }

//   if (keyringState !== 'READY') {
//     return Loader('Loading accounts (please review any extension\'s authorization)');
//   }

//   const contextRef = createRef<HTMLDivElement>();

//   return (
//     <div ref={contextRef}>
//         <HashRouter>
//           {/* <Header /> */}
//           <EventsContextProvider>
//             {/* <Switch>
//               <Route exact strict path="/" component={Home} />
//               <Route exact strict path="/dev" component={Dev} />
//             </Switch> */}
//             <h1>hello</h1>
//           </EventsContextProvider>
//         </HashRouter>
//         {/* <DeveloperConsole /> */}
//       </div>
//   );
// }

// export default () => {
//     return (
//       <ApiContextProvider>
//         <AccountContextProvider>
//           <Main />
//         </AccountContextProvider>
//       </ApiContextProvider>
//     );
// };




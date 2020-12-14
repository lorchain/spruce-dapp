import React, { FC, useState } from 'react';

import 'antd/dist/antd.css';
// import 'semantic-ui-css/semantic.min.css';
// import './styles/index.scss';
// import './styles/global.css';
import '../components/styles/global.css';
import { BareProps } from '../components/types';

export interface UIData {
  phantomdata: any;
}

export const UIContext = React.createContext<UIData>({ phantomdata: '' });

export const UIProvider: FC<BareProps> = ({ children }) => {
  const [state] = useState<UIData>({ phantomdata: '' });

  return (
    <UIContext.Provider value={state}>
      {children}
    </UIContext.Provider>
  );
};

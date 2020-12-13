import React, { createContext, useState } from 'react';

interface IContextProps {
  account: any;
  setAccount: any;
  balances: any;
  setBalances: any;
}

const AccountContext = createContext({} as IContextProps);

const AccountContextProvider = (props: any) => {
  const [account, setAccount] = useState(null);
  const [balances, setBalances] = useState(new Map());

  const value: any = { account, setAccount, balances, setBalances };
  return (
    <AccountContext.Provider value={value}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { AccountContext, AccountContextProvider };

import { useContext } from 'react';
// import { ExtensionData, ExtensionContext } from '../components/Environment';
import { ExtensionData, ExtensionContext } from '../context';

/**
 * @name useAccounts
 */
export const useAccounts = (): ExtensionData => {
  const data = useContext(ExtensionContext);

  return data;
};

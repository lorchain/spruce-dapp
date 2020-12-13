import { useContext } from 'react';
import { ExtensionData, ExtensionContext } from '../components/Environment';

/**
 * @name useAccounts
 */
export const useAccounts = (): ExtensionData => {
  const data = useContext(ExtensionContext);

  return data;
};

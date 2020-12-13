import { useContext } from 'react';
import { SettingContext, SettingDate } from '../components/Environment/SettingProvider';

export const useSetting = (): SettingDate => {
  return useContext(SettingContext);
};

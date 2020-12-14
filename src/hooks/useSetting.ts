import { useContext } from 'react';
// import { SettingContext, SettingDate } from '../components/Environment/SettingProvider';
import { SettingContext, SettingDate } from '../context';

export const useSetting = (): SettingDate => {
  return useContext(SettingContext);
};

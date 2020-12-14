import React, { FC, useCallback } from 'react';
import { Drawer } from 'antd';

import { useSetting } from '../hooks';
import { DEFAULT_ENDPOINTS } from '../components/Environment/configs/endpoints';
// import { Radio, CloseIcon } from '../components';
import { Radio } from '../components';
import { CloseOutlined } from '@ant-design/icons';

// import classes from './AppSettings.module.scss';
// import './AppSettings.css';
import styled from 'styled-components';

const LanguageConfig = [
  {
    key: 'English',
    value: 'en'
  },
  {
    key: 'Chinese',
    value: 'zh'
  }
];

interface Props {
  className?: string;
}

function AppSettings ({ className = '' }: Props): React.ReactElement<Props> | null {

// export const AppSettings: FC = () => {
  const {
    changeEndpoint,
    closeSetting,
    endpoint,
    language,
    setLanguage,
    settingVisible
  } = useSetting();

  const handleEndpoint = useCallback((endpoint: string) => {
    changeEndpoint(endpoint);

    window.location.reload();
  }, [changeEndpoint]);

  const handleLanguage = useCallback((language: string) => {
    setLanguage(language as any);
  }, [setLanguage]);

  return (
    // <div className={className}>
    <Drawer
      className={className}
      closeIcon={<CloseOutlined />}
      onClose={closeSetting}
      placement='left'
      visible={settingVisible}
      width={520}
    >
      <div>
        <div className='settingItem'>
          <p className='title'>Select Network</p>
          <div className='settingContent'>
            <ul className='list'>
              {
                DEFAULT_ENDPOINTS.testnet.map((config) => {
                  return (
                    <li
                      className='listItem'
                      key={`endpoint-${config.url}`}
                      onClick={(): void => handleEndpoint(config.url)}
                    >
                      <div>{config.name}</div>
                      <Radio
                        checked={endpoint === config.url}
                      />
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <div className='settingItem'>
          <p className='title'>Language</p>
          <div className='settingContent'>
            <ul className='list'>
              {
                LanguageConfig.map((config) => {
                  return (
                    <li
                      className='listItem'
                      key={`language-${config.value}`}
                      onClick={(): void => handleLanguage(config.value)}
                    >
                      <div>{config.key}</div>
                      <Radio
                        checked={language === config.value}
                      />
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </Drawer>
    // </div>
  );
}

export default React.memo(styled(AppSettings)`
  :global(.ant-drawer-body) {
    overflow: hidden;
  }

  :global(.ant-drawer-content-wrapper) {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    overflow: hidden;
  }

  .settingItem {
    margin-top: 24px;

    .title {
      margin-bottom: 12px;
      font-size: 22px;
      font-weight: bold;
    }

    .list {
      list-style: none;
    }

    .listItem {
      display: flex;
      justify-content: space-between;
      padding: 4px 16px;
      margin: 0 -16px;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        background-image: linear-gradient(90deg, #E5EAFF 0%, #F5F6FA 100%);
      }
    }
  }
`);


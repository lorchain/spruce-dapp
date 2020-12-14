import React, { FC, useCallback, useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useSetting } from '../hooks';
import Radio from './Radio';
import { EndpointConfigItem, EndpointType } from './Environment/configs/endpoints';

// import './SelectNetwork.css';
// import classes from './SelectNetwork.module.scss';
import styled from 'styled-components';

// export interface SelectNetworkProps {
//   visiable: boolean;
//   onClose: () => void;
// }

const TypeNameMap: Record<EndpointType, string> = {
  development: 'Development',
  production: 'Production',
  testnet: 'Test Networks'
};

interface Props {
  className?: string;
  visiable: boolean;
  onClose: () => void;
}

function SelectNetwork ({ className = '', visiable, onClose }: Props): React.ReactElement<Props> | null {


// export const SelectNetwork: FC<SelectNetworkProps> = ({
//   onClose,
//   visiable
// }) => {
  const { changeEndpoint, endpoint, selectableEndpoints } = useSetting();
  const [selected, setSelected] = useState<string>('');

  const renderEndpoints = useCallback((type: EndpointType, endpoints: EndpointConfigItem[]) => {
    if (!endpoints.length) return null;

    return (
      <div
        className={className}
        key={`select-endpoint-type-${type}`}
      >
        <p className='endpointType'>{TypeNameMap[type]}</p>
        <ul className='endpointList'>
          {
            endpoints.map((config) => (
              <li
                className='endpointItem'
                key={`select-endpoint-${config.url}`}
                onClick={(): void => setSelected(config.url)}
              >
                <p>{config.name}</p>
                <Radio
                  checked={config.url === selected }
                />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }, [selected, setSelected, className]);

  const handleSelect = useCallback(() => {
    changeEndpoint(selected);
    // reload page to ensure that network change success
    window.location.reload();
  }, [changeEndpoint, selected]);

  useEffect(() => {
    if (endpoint) setSelected(endpoint);
  }, [endpoint, setSelected, visiable]);

  return (
    <Modal
      // action={
      //   <>
      //     <Button
      //       onClick={onClose}
      //       size='small'
      //       style='normal'
      //       type='border'
      //     >
      //       Close
      //     </Button>
      //     <Button
      //       onClick={handleSelect}
      //       size='small'
      //       style='primary'
      //     >
      //       Switch
      //     </Button>
      //   </>
      // }
      onCancel={onClose}
      onOk={handleSelect}
      title='Choose Networks'
      visible={visiable}
    >
      {
        Object.keys(selectableEndpoints).map((key) => renderEndpoints(key as EndpointType, selectableEndpoints[key as EndpointType]))
      }
    </Modal>
  );
}

export default React.memo(styled(SelectNetwork)`
  margin-bottom: 24px;

  .endpointType {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 19px;
    color: var(--text-color-primary);
  }

  .endpointList {
    list-style: none;
  }

  .endpointItem {
    width: 100%;
    height: 48px;

    padding: 0 16px;
    margin-bottom: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid var(--border-color);
    border-radius: 2px;

    cursor: pointer;
  }
`);

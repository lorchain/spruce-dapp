import React, { memo, useCallback } from 'react';
// import { Dialog } from '@acala-dapp/ui-components';
import { Modal } from 'antd';

const POLKADOT_EXTENSION_PAGE = 'https://polkadot.js.org/extension';

export const NoExtensions: React.FC = memo(() => {
  const handleGetExtensionBtnClick = useCallback((): void => {
    window.open(POLKADOT_EXTENSION_PAGE);
  }, []);

  return (
    <Modal
      cancelText={undefined}
      okText='GET IT'
      onOk={handleGetExtensionBtnClick}
      title={null}
      visible={true}
    >
      <p>{'No polkadot{.js} extension found, please install it first!'}</p>
      <a
        href={POLKADOT_EXTENSION_PAGE}
        rel='noopener noreferrer'
        target='_blank'
      >{'Get Polkadot{.js}'}</a>
    </Modal>
  );
});

NoExtensions.displayName = 'NoExtensions';

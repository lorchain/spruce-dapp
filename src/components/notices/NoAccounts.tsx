import React, { FC, memo } from 'react';
// import { Dialog } from '@acala-dapp/ui-components';
import { Modal } from 'antd';

export const NoAccounts: FC = memo(() => {
  const handleRetry = (): void => window.location.reload();

  return (
    <Modal
      cancelText={undefined}
      okText='Retry'
      onOk={handleRetry}
      title={null}
      visible={true}
    >
      <p>
        No account found, please add account in your wallet extension or unlock it!
      </p>
    </Modal>
  );
});

NoAccounts.displayName = 'NoAccounts';

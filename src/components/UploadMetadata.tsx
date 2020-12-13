// import { Dialog, Typology } from '@acala-dapp/ui-components';
import { Typology } from '../components';
import { Modal } from 'antd';
import React, { FC } from 'react';

interface UploadMetadataProps {
  uploadMetadata: () => Promise<void>;
  visiable: boolean;
  close: () => void;
}

export const UploadMetadata: FC<UploadMetadataProps> = ({
  close,
  uploadMetadata,
  visiable
}) => {
  return (
    <Modal
      cancelText={'Cancel'}
      okText={'Upload'}
      onCancel={close}
      onOk={uploadMetadata}
      visible={visiable}
    >
      <Typology.Body>Upload metadata for best experience.</Typology.Body>
    </Modal>
  );
};

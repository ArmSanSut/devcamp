import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function App() {
  const props = {
    name: 'file_name',
    action: 'http://localhost:3000/users/upload',
    headers: {
      authorization: 'authorization-text',
    },

    onChange(info) {
      console.log(info.file)
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </>
  );
}

export default App;

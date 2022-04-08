import React, { useState } from 'react';
import { Modal, Button } from 'antd';


function PostArticle() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type='primary' onClick={() => setVisible(true)}>
        Add New Post +
      </Button>
      <Modal
        title='Modal 1000px width'
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
}
export default PostArticle;

import React from 'react';
import { Modal, Button } from 'antd';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { visible } = this.props;

    return (
      <Modal
        title="编辑框"
        visible={visible}
        onCancel={this.props.onCancel}
        onOk={this.props.onOk}
      >
        <Button>123</Button>
      </Modal>
    );
  }
}

export default EditModal;

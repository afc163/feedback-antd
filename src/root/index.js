import React from 'react';
import { Table, Modal, Form, Select, DatePicker, Button } from 'antd';
import EditModal from './components/modal_edit';
import columns from './columns';

const FormItem = Form.Item;
const Option = Select.Option;

class Root extends React.Component {
  constructor(props) {
    super(props);
    columns[6].render = this.renderAction;
    this.state = {
      showEditModal: false
    }
  }

  renderAction = () => {
    return [
      <Button key="1" type="link" size="small"
        onClick={() => this.setState({ showEditModal: true })}
      >编辑</Button>,
      <Button key="2" type="link" size="small"
        onClick={() => Modal.confirm({
          title: '确定要封禁吗'
        })}
      >封禁</Button>
    ];
  }
  
  render() {

    const data = Array(50).fill(0).map((v, i) => {
      return {
        id: i + 1,
        name: '么么一睡',
        email: 'taotao@mail.com',
        address: '黑龙江省 鹤岗市',
      };
    });


    return (
      <div style={{ height: '99vh', padding: 50, overflow: 'auto' }}>
        <div style={{ height: 3000 }}>
          <Form layout="inline">
            <FormItem label="订单状态">
              <Select allowClear placeholder="全部" style={{ width: 200 }}>
                <Option value="1">未发货</Option>
                <Option value="2">已发货</Option>
              </Select>
            </FormItem>
            <FormItem label="下单时间">
              <DatePicker allowClear style={{ width: 200 }} />
            </FormItem>
          </Form>
          <Table
            bordered
            rowKey="id"
            size="middle"
            columns={columns}
            dataSource={data}
            scroll={{ y: 500, x: true }}
            pagination={{
              pageSize: 40,
              showQuickJumper: true,
              showSizeChanger: true,
              pageSizeOptions: ['20', '40', '80', '100'],
              showTotal: tol => `共 ${tol} 条`
            }}
          />
          <EditModal
            visible={this.state.showEditModal}
            onCancel={() => this.setState({ showEditModal: false })}
          />
        </div>
      </div>
    );
  }
}

export default Root;

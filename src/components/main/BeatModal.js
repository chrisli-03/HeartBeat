import React from 'react'
import { Modal, Form, Input, InputNumber, Radio } from 'antd'

const BeatModel = Form.create({ name: 'form_in_modal' })(
  ({ visible, onCancel, onCreate, form, beat }) => {
    const { getFieldDecorator } = form
    const create = !beat

    return (
      <Modal
        visible={visible}
        title={`${create ? 'New' : 'Edit'} Beat`}
        okText={create ? 'Create' : 'Edit'}
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <Form.Item label="Beat Name">
            {getFieldDecorator('beatName', {
              rules: [{ required: true, message: 'Please input the name of beat.' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="IP">
            {getFieldDecorator('ip', {
              rules: [{ required: true, message: 'Please input the ip of beat.' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Beat Per Minute">
            {getFieldDecorator('bpm', {
              rules: [{ required: true, message: 'Please input the beat per minute' }],
            })(<InputNumber />)}
          </Form.Item>
          {/*<Form.Item className="collection-create-form_last-form-item">*/}
          {/*  {getFieldDecorator('modifier', {*/}
          {/*    initialValue: 'public',*/}
          {/*  })(*/}
          {/*    <Radio.Group>*/}
          {/*      <Radio value="public">Public</Radio>*/}
          {/*      <Radio value="private">Private</Radio>*/}
          {/*    </Radio.Group>*/}
          {/*  )}*/}
          {/*</Form.Item>*/}
        </Form>
      </Modal>
    );
  }
)

export default BeatModel
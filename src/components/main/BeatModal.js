import React from 'react'
import { Modal, Form, Input, Button, InputNumber, Radio } from 'antd'
import PropTypes from 'prop-types'

const BeatModal = Form.create({ name: 'form_in_modal' })(
  ({ visible, onCancel, onCreate, onDelete, form, beat }) => {
    const { getFieldDecorator } = form
    const create = !beat
    const footer = [
      <Button key="cancel" onClick={onCancel}>
        Cancel
      </Button>,
      <Button key="submit" type="primary" onClick={onCreate}>
        { create ? 'Create' : 'Save' }
      </Button>,
    ]
    if (!create) {
      footer.unshift(
        <Button key="delete" type="danger" onClick={onDelete}>
          Delete
        </Button>
      )
    }

    return (
      <Modal
        visible={visible}
        title={`${create ? 'New' : 'Edit'} Beat`}
        okText={create ? 'Create' : 'Edit'}
        footer={footer}
      >
        <Form layout="vertical">
          <Form.Item label="Beat Name">
            {getFieldDecorator('beatName', {
              initialValue: !create ? beat.beatName : '' ,
              rules: [{ required: true, message: 'Please input the name of beat.' }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="IP">
            {getFieldDecorator('ip', {
              initialValue: !create ? beat.ip : '',
              rules: [{ required: true, message: 'Please input the ip of beat.' }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Beat Per Minute">
            {getFieldDecorator('bpm', {
              initialValue: !create ? beat.bpm : '',
              rules: [{ required: true, message: 'Please input beat per minute' }]
            })(<Input />)}
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

BeatModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  beat: PropTypes.object
}


export default BeatModal
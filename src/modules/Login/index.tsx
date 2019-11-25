import React, {useState, useEffect} from 'react';
import {Modal, Form, Icon, Input, Button} from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import bg from './images/bg.png';

const Item = Form.Item;

export interface LoginProps extends FormComponentProps {
  visible?: boolean,
  onClose?: () => any
}

function Login({visible, onClose, form}: LoginProps) {
  const {getFieldDecorator, validateFields} = form;
  const handleSubmit = (e: any) => {
    e.preventDefault();    
  }

  return (
    <Modal visible={visible} onCancel={onClose} footer={null} width={400}>
      <img src={bg} alt="bg" />

      <Form onSubmit={handleSubmit}>
        <Item>
          {getFieldDecorator('phone', {
            rules: [{required: true, message: '请输入您的手机号码'}],
          })(
            <Input prefix={<Icon type="user" />} placeholder="手机号码" />
          )}
        </Item>
        <Item>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码'}],
          })(
            <Input prefix={<Icon type="lock" />} placeholder="密码" />
          )}
        </Item>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    </Modal>
  )
}

export default Form.create<LoginProps>()(Login);
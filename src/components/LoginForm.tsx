import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { rules } from '../utils/rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(AuthActionCreators.login('', ''))
  }
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={submit}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[rules.required('Please input your username!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[rules.required('Please input your password!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { rules } from '../utils/rules';
import { useTypedSelector } from '../hooks/useTypedSector';
import { useActions } from '../hooks/useActions';

const LoginForm: FC = () => {
  const { login } = useActions();
  const { isLoading, error } = useTypedSelector((state) => state.authReducer);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submit = () => {
    login(username, password);
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={submit}
      autoComplete='off'
    >
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item
        label='Username'
        name='username'
        rules={[rules.required('Please input your username!')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[rules.required('Please input your password!')]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

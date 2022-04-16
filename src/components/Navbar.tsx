import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSector';

const Navbar: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer);
  const router = useNavigate();
  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth ? (
          <>
            <div style={{ color: 'lightgrey' }}>LTV</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item key={1} onClick={() => console.log('Exit')}>
                Sign out
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item key={1} onClick={() => router('/login')}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

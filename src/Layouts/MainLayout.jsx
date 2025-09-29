import React, { useState } from 'react';
import {
    AccountBookOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='h-full min-h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className="demo-logo-vertical" />
        <Menu
        //   theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
            className='[&_a]:text-lg [&_li]:!my-4'
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <Link to="/">الرئيسية</Link>,
            },
            {
              key: '2',
              icon: <AccountBookOutlined />,
              label: <Link to="/accounts">الحسابات</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to="/stock">المخزون</Link>,
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: <Link to="/sales">المبيعات</Link>,
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: <Link to="/purch">المشتريات</Link>,
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: <Link to="/financial">الحركة المالية</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >

          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
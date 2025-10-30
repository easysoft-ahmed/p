import React, { useEffect, useState } from 'react';
import logo from "../../public/logo.png";
import user_image from "../../public/user_image.png";
import Icon, {
    AccountBookOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {AccountsIcon, HomeIcon, MoneyMovementIcon, PurchIcon, SalesIcon, StockIcon} from '../assets/IconsGroup';
import { useDispatch, useSelector } from 'react-redux';
import { logout_user } from '../redux/stateGlobal';
import Breadcrumb from '../components/BreadCrumb';
const { Header, Sider, Content } = Layout;




const MainLayout = () => {
  let {pathname} = useLocation();
  let checkLogin = useSelector(state => state.global.value);
  let dispatch = useDispatch();
  let [whatIsSelect, setWhatIsSelect] = useState("");
  let handleLogout = ()=>{
    dispatch(logout_user())
  }
  console.log(checkLogin.user_login);
  
  const items = [
    {
      key: "1", label:( <Link to={"/profile"}>الملف الشخصي</Link> )
     },
    {
      key: "2", label:( <Link to={"/settings"}>الإعدادات</Link> )
    },
    {
      type: 'divider',
    },
    {
      key: "3", label:( <Link onClick={handleLogout}>تسجيل خروج</Link> ), danger: true
    },
  ];
  
  let handleSelectMenu = ()=>{
    let getPath = window.location.pathname;
    
    if(getPath.includes("accounts")){
      setWhatIsSelect("2")
    }else if(getPath.includes("stock")){
      setWhatIsSelect("3")
    }else if(getPath.includes("purch")){
      setWhatIsSelect("4")
    }else if(getPath.includes("sales")){
      setWhatIsSelect("5")
    }else if(getPath.includes("financial")){
      setWhatIsSelect("6")
    }else if(getPath.includes("settings")){
      setWhatIsSelect("7")
    }else{
      setWhatIsSelect("1")
    }
  }

  if(!checkLogin.user_login){
    location.assign("/login")
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  // useEffect(()=>{
  //   handleSelectMenu()
  // }, [pathname])

  if(checkLogin.user_login){

    return (
      <Layout className='h-full min-h-screen'>
        <Sider trigger={null} collapsible className='bg-[#022a62] rounded-e-xl'  collapsed={collapsed} theme='light'>
          <div className="demo-logo-vertical " >
              <img src={logo} alt="Your Company" class="mx-auto my-4 h-16 w-auto" />
          </div>
          <Menu
            selectedKeys={
              pathname.includes("accounts") ? "2"
              : pathname.includes("stock") ? "3"
              : pathname.includes("purch") ? "4"
              : pathname.includes("sales") ? "5"
              : pathname.includes("financial") ? "6"
              : pathname.includes("system") ? "7"
              : "1"
            }
          //   theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
              className={
                `${window.location.pathname === "/stock" ? "ant-menu-item-selected":""} [&_a]:text-lg [&_li]:!my-4 bg-transparent [&_li]:!px-5 [&_li_span.ant-menu-item-icon]:p-[5px]  [&_li:not(.ant-menu-item-selected)]:text-white [&_li:hover]:!text-indigo-600  [&_li:active]:text-blue-700`}
              // className='[&_a]:text-lg [&_li]:!my-4 bg-transparent [&_li]:!px-5 [&_li_span.ant-menu-item-icon]:p-[5px]  [&_li:not(.ant-menu-item-selected)]:text-white [&_li:hover]:!text-indigo-600  [&_li:active]:text-blue-700'
            items={[
              {
                key: '1',
                icon: <HomeIcon />,
                label: <Link to="/">الرئيسية</Link>,
              },  
              {
                key: '2',
                icon: <AccountsIcon  />,
                label: <Link to="/accounts">الحسابات</Link>,
              },
              {
                key: '3',
                icon: <StockIcon />,
                label: <Link to="/stock">المخزون</Link>,
              },
              {
                key: '4',
                icon: <PurchIcon />,
                label: <Link to="/purch">المشتريات</Link>,
              },
              {
                key: '5',
                icon: <SalesIcon />,
                label: <Link to="/sales">المبيعات</Link>,
              },
              {
                key: '6',
                icon: <MoneyMovementIcon />,
                label: <Link to="/financial">الحركة المالية</Link>,
              },
              {
                key: '7',
                icon: <AccountsIcon  />,
                label: <Link to="/system">النظام</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer , display: "flex", justifyContent: "space-between" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined /> }
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
              <Dropdown menu={{items}} trigger={['click']}>
                <Space>
  
                  <div onClick={(e) => e.preventDefault()} className='flex w-auto justify-end items-center gap-2 px-4 cursor-pointer'>
                      <b className='font-sans font-semibold text-[#022a62]'>{checkLogin?.user_login?.UserName || "مستخدم"}</b>
                      <img src={user_image} className='w-[30px] h-[30px]' alt="user image" />
                  </div>
                </Space>
              </Dropdown>
  
          </Header>
          
          <Breadcrumb />
  
          <Content
            style={{
              margin: '24px 16px',
              marginTop: 0,
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
  }
};
export default MainLayout;



          // <nav className="flex p-5" aria-label="Breadcrumb">
          //   <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          //     <li className="inline-flex items-center">
          //       <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          //         <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          //           <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          //         </svg>
          //         الرئيسية
          //       </a>
          //     </li>
          //     <li>
          //       <div className="flex items-center">
          //         <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          //           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          //         </svg>
          //         <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">الصفحة السابقة</a>
          //       </div>
          //     </li>
          //     <li aria-current="page">
          //       <div className="flex items-center">
          //         <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          //           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          //         </svg>
          //         <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">الصفحة الحالية</span>
          //       </div>
          //     </li>
          //   </ol>
          // </nav>

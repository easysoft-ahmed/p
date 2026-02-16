import React, { useEffect, useState } from 'react';
import logo from "../../public/logo.png";
import user_image from "../../public/user_image.png";
import Icon, {
    AccountBookOutlined,
  AppstoreOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Dropdown, Layout, Menu, Space, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {AccountsIcon, HomeIcon, MoneyMovementIcon, PurchIcon, SalesIcon, StockIcon} from '../assets/IconsGroup';
import { useDispatch, useSelector } from 'react-redux';
import { logout_user } from '../redux/stateGlobal';
import Breadcrumb from '../components/BreadCrumb';
import ButtonPrintReportPage from '../components/PrintReport';
const { Header, Sider, Content } = Layout;




const MainLayout = () => {
  let {pathname} = useLocation();
  let checkLogin = useSelector(state => state.global.value);
  let dispatch = useDispatch();
  let [whatIsSelect, setWhatIsSelect] = useState("");
  let handleLogout = ()=>{
    dispatch(logout_user())
  }
  
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
          <ConfigProvider direction="rtl">
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
              // mode="inline"
              mode="vertical"
              defaultSelectedKeys={['1']}
                className={
                  `[&_.ant-menu-title-content]:text-white ${window.location.pathname === "/stock" ? "ant-menu-item-selected":""} [&_a]:text-lg [&_li]:!my-4 bg-transparent [&_li]:!px-5 [&_li_span.ant-menu-item-icon]:p-[5px]  [&_li:not(.ant-menu-item-selected)]:text-white [&_li:hover]:!text-indigo-600  [&_li:active]:text-blue-700`}
                // className='[&_a]:text-lg [&_li]:!my-4 bg-transparent [&_li]:!px-5 [&_li_span.ant-menu-item-icon]:p-[5px]  [&_li:not(.ant-menu-item-selected)]:text-white [&_li:hover]:!text-indigo-600  [&_li:active]:text-blue-700'
              items={[
                {
                  key: '1',
                  icon: <HomeIcon />,
                  label: <Link to="/">الرئيسية</Link>,
                },  
                // {
                //   key: '6',
                //   icon: <MoneyMovementIcon />,
                //   label: <Link to="/financial">الحركة المالية</Link>,
                // },
                // {
                //   key: '7',
                //   icon: <AccountsIcon  />,
                //   label: <Link to="/system">النظام</Link>,
                // },
                  // {
                  //   key: '2',
                  //   icon: collapsed && <AccountsIcon />,
                  //   label: <Link to="/accounts">الحسابات</Link>,
                  //   children: [
                  //     {
                  //       key: '2-1',
                  //       label: 'الاكواد',
                  //       children: [
                  //         { key: '2-1-1', label: <Link to="/accounts/accounts_codes">أكواد الحسابات </Link> },
                  //         { key: '2-1-2', label: <Link to="/accounts/helps_codes">أكواد اليوميات المساعدة </Link> },
                  //       ],
                  //     },
                  //     {
                  //       key: '2-2',
                  //       label: 'التقارير',
                  //       children: [
                  //         { key: '2-2-1', label: <Link to="/accounts/accounts_codes">اجمالي قيود اليومية </Link> },
                  //         { key: '2-2-2', label: <Link to="/accounts/helps_codes">أكواد اليوميات المساعدة </Link> },
                  //         { key: '2-2-2', label: <Link to="/accounts/helps_codes">أكواد اليوميات المساعدة </Link> },
                  //       ],
                  //     },
                  //   ],
                  // },
                  {
                    key: '3',
                    icon: collapsed && <StockIcon />,
                    label: <Link to="/stock">المخزون</Link>,
                    children: [
                      {
                        key: '3-1',
                        label: 'الاكواد',
                        children: [
                          { key: '3-1-1', label: <Link to="/stock/units">وحدات القياس  </Link> },
                          { key: '3-1-2', label: <Link to="/stock/country_of_origin">بلد المنشأ  </Link> },
                          { key: '3-1-3', label: <Link to="/stock/products">الاصناف </Link> },
                          { key: '3-1-4', label: <Link to="/stock/stores">المخازن </Link> },
                        ],
                      },
                      {
                        key: '3-2',
                        label: 'الاجراءات',
                        children: [
                          { key: '3-2-1', label: <Link to="/stock/print_barcode">طباعة الباركود </Link> },
                          { key: '3-2-2', label: <Link to="/stock/stores_movement">حركة المخزون </Link> },
                          { key: '3-2-3', label: <Link to="/stock/store_transform">التحويلات بين المخازن</Link> },
                          { key: '3-2-4', label: <Link to="/stock/real_inventory">حركة الجرد الفعلي </Link> },
                          { key: '3-2-5', label: <Link to="/stock/price_list">قائمة الاسعار </Link> },
                          { key: '3-2-6', label: <Link to="/stock/advanced_search">بحث متقدم للاصناف </Link> },
                        ],
                      },
                      {
                        key: '3-3',
                        label: 'التقارير',
                        children: [
                          { key: '3-3-1', label: <Link to="/stock/reports/daily_stock">يومية المخزون </Link> },
                          { key: '3-3-2', label: <Link to="/stock/reports/daily_transform_stock">يومية التحويلات المخزنية </Link> },
                          { key: '3-3-3', label: <Link to="/stock/reports/card_product">كارت الصنف </Link> },
                          { key: '3-3-4', label: <Link to="/stock/reports/qty_products">ارصدة الاصناف </Link> },
                          { key: '3-3-5', label: <Link to="/stock/reports/low_products">الاصناف الراكدة  </Link> },
                          { key: '3-3-6', label: <Link to="/stock/reports/limit_products">الحدود المخزنية للاصناف </Link> },
                        ],
                      },
                      {
                        key: '3-4',
                        label: 'الاعدادات',
                        children: [
                          { key: '3-4-1', label: <Link to="/stock/settings">التثبيت و الخصائص </Link> },
                        ],
                      },
                      {
                        key: '3-5',
                        label: 'اوامر الطباعة',
                        children: [
                          { key: '3-5-1', label: <ButtonPrintReportPage text={true} title="وحدات القياس" WindowName={"UnitsReport"} DocId={1}/> },
                          { key: '3-5-2', label: <ButtonPrintReportPage text={true} title="انواع الاصناف" WindowName={"CategoriesReport"}  DocId={1}/> },
                          { key: '3-5-3', label: <ButtonPrintReportPage text={true} title="الاصناف" WindowName={"ProductsReport"}  DocId={1}/> },
                          { key: '3-5-4', label: <ButtonPrintReportPage text={true} title="المخازن" WindowName={"StoresReport"}  DocId={1}/> },
                        ],
                      },
                    ],
                  },
                  {
                    key: '4',
                    icon: collapsed && <PurchIcon />,
                    label: <Link to="/purch">المشتريات</Link>,
                    children: [
                      {
                        key: '4-1',
                        label: 'الاكواد',
                        children: [
                          { key: '4-1-1', label: <Link to="/purch/suppliers_types">انواع الموردين</Link> },
                          { key: '4-1-2', label: <Link to="/purch/suppliers_types">الموردين</Link> },
                        ],
                      },
                      {
                        key: '4-2',
                        label: 'الاجراءات',
                        children: [
                          { key: '4-2-1', label: <Link to="/purch/purch_order">امر شراء </Link> },
                          { key: '4-2-2', label: <Link to="/purch/purch_request">طلب شراء </Link> },
                          { key: '4-2-3', label: <Link to="/purch/purch_invoice">فاتورة المشتريات</Link> },
                          { key: '4-2-4', label: <Link to="/purch/purch_return_invoice">فاتورة مرتد المشتريات </Link> },
                        ],
                      },
                      {
                        key: '4-3',
                        label: 'التقارير',
                        children: [
                          { key: '4-3-1', label: <Link to="/purch/reports/total_purch">إجمالي المشتريات </Link> },
                          { key: '4-3-2', label: <Link to="/purch/reports/suppliers_acc_statement">كشف حساب / ارصدة الموردين </Link> },
                          { key: '4-3-3', label: <Link to="/purch/reports/purch_expenses">تقرير مصروفات المشتريات </Link> },
                          { key: '4-3-4', label: <Link to="/purch/reports/total_order_purch">إجمالي طلبات الشراء </Link> },
                          { key: '4-3-5', label: <Link to="/purch/reports/total_command_purch">إجمالي اومر الشراء  </Link> },
                        ],
                      },
                      {
                        key: '4-4',
                        label: 'الاعدادات',
                        children: [
                          { key: '4-4-1', label: <Link to="/purch/settings">التثبيت و الخصائص </Link> },
                        ],
                      },
                      {
                        key: '4-5',
                        label: 'اوامر الطباعة',
                        children: [
                          { key: '4-5-1', label: <ButtonPrintReportPage text={true} title="الموردين" WindowName={"VendorsReport"} DocId={1}/> },
                        ],
                      },
                    ],
                  },
                  {
                    key: '5',
                    icon: collapsed && <SalesIcon />,
                    label: <Link to="/sales">المبيعات</Link>,
                    children: [
                      {
                        key: '5-1',
                        label: 'الاكواد',
                        children: [
                          { key: '5-1-1', label: <Link to="/sales/delegates_staff">المندوبين</Link> },
                          { key: '5-1-2', label: <Link to="/sales/customers_types">انواع العملاء </Link> },
                          { key: '5-1-2', label: <Link to="/sales/customers">العملاء </Link> },
                        ],
                      },
                      {
                        key: '5-2',
                        label: 'الاجراءات',
                        children: [
                          { key: '5-2-1', label: <Link to="/sales/sale">العروض الخاصة </Link> },
                          { key: '5-2-2', label: <Link to="/sales/offers_price">عروض الاسعار </Link> },
                          { key: '5-2-3', label: <Link to="/sales/sales_invoice">المبيعات</Link> },
                          { key: '5-2-4', label: <Link to="/sales/sales_return_invoice">مرتد المبيعات </Link> },
                        ],
                      },
                      {
                        key: '5-3',
                        label: 'التقارير',
                        children: [
                          { key: '5-3-1', label: <Link to="/sales/reports/total_sales">إجمالي المبيعات </Link> },
                          { key: '5-3-2', label: <Link to="/sales/reports/customers_acc_statement">كشف حساب / ارصدة العملاء </Link> },
                          { key: '5-3-3', label: <Link to="/sales/reports/profit_sales_products">ربحية الاصناف المباعة </Link> },
                          { key: '5-3-4', label: <Link to="/sales/reports/total_customers_movement">إجمالي حركة العملاء </Link> },
                          { key: '5-3-5', label: <Link to="/sales/reports/low_customers">العملاء الراكدة  </Link> },
                          { key: '5-3-6', label: <Link to="/sales/reports/total_due_invoice">إجمالي الفواتير المستحقة  </Link> },
                        ],
                      },
                      {
                        key: '5-4',
                        label: 'اوامر الطباعة',
                        children: [
                          { key: '5-4-1', label: <ButtonPrintReportPage text={true} title="المناطق" WindowName={"AreasReport"} DocId={1}/> },
                          { key: '5-4-1', label: <ButtonPrintReportPage text={true} title="المندوبين" WindowName={"StaffReport"}  DocId={1}/> },
                          { key: '5-4-1', label: <ButtonPrintReportPage text={true} title="مصادر العملاء" WindowName={"SourcesReport"}  DocId={1}/> },
                          { key: '5-4-1', label: <ButtonPrintReportPage text={true} title="العملاء" WindowName={"CustomersReport"}  DocId={1}/> },
                        ],
                      },
                    ],
                  },
                  {
                    key: '6',
                    icon: collapsed && <MoneyMovementIcon />,
                    label: <Link to="/financial">الحركة المالية</Link>,
                    children: [
                      {
                        key: '6-1',
                        label: 'الاكواد',
                        children: [
                          { key: '6-1-1', label: <Link to="/financial/currencies">العملات</Link> },
                          { key: '6-1-2', label: <Link to="/financial/taxes">الضرائب </Link> },
                          { key: '6-1-3', label: <Link to="/financial/boxs">الخزن </Link> },
                          { key: '6-1-4', label: <Link to="/financial/banks">البنوك </Link> },
                          { key: '6-1-5', label: <Link to="/financial/code_cash_flow">البنود ( مقبوضات - مدفوعات) </Link> },
                          { key: '6-1-6', label: <Link to="/financial/rank_cash_flow">تصنيف البنود ( مقبوضات - مدفوعات)  </Link> },
                          // { key: '5-1-2', label: <Link to="/sales/customers">تعامل جهات اخرى </Link> },
                        ],
                      },
                      {
                        key: '6-2',
                        label: 'الايصالات',
                        children: [
                          { key: '6-2-1', label: <Link to="/financial/cash_receipt">قبض </Link> },
                          { key: '6-2-2', label: <Link to="/financial/payment_receipt">دفع </Link> },
                        ],
                      },
                      {
                        key: '6-3',
                        label: 'الشيكات',
                        children: [
                          { key: '6-3-1', label: <Link to="/financial/incoming_checks">شيكات واردة </Link> },
                          { key: '6-3-2', label: <Link to="/financial/outgoing_checks">شيكات صادرة </Link> },
                          { key: '6-3-3', label: <Link to="/financial/deposit_in_wallet">إيداع في حافظة  </Link> },
                          { key: '6-3-4', label: <Link to="/financial/deposit_incoming_checks">إيداع شيكات واردة </Link> },
                          { key: '6-3-5', label: <Link to="/financial/exchange_outgoing_checks">صرف شيكات صادرة  </Link> },
                          { key: '6-3-6', label: <Link to="/financial/return_incoming_checks">رد شيكات واردة  </Link> },
                          { key: '6-3-7', label: <Link to="/financial/return_outgoing_checks">رد شيكات صادرة </Link> },
                        ],
                      },
                      {
                        key: '6-4',
                        label: 'الماليات',
                        children: [
                          { key: '6-4-1', label: <Link to="/financial/money_transfer">التحويلات المالية  </Link> },
                          { key: '6-4-2', label: <Link to="/financial/fin_adjustments">التسويات المالية </Link> },
                        ],
                      },
                      {
                        key: '6-5',
                        label: 'الاقساط',
                        children: [
                          { key: '6-5-1', label: <Link to="/financial/installments_data">إضافة بيانات الاقساط  </Link> },
                        ],
                      },
                    ],
                  },

              ]}
            />
          </ConfigProvider>

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

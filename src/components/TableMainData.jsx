import { useEffect, useState } from "react";
import useGet from "../hooks/useGet";
import MessageRequest from "./MessageRequest";
import { regxMatchFilterTable } from "../helpers";
import { Link } from "react-router-dom";
import { Button, Input, Space, Spin, Table } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";


export   const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`بحث في ${title}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => {
            confirm();
            setSearchText(selectedKeys[0]);
          }}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button type="primary" onClick={() => { confirm(); setSearchText(selectedKeys[0]); }} size="small" style={{ width: 90 }}>
            بحث
          </Button>
          <Button onClick={() => { clearFilters(); setSearchText(''); }} size="small" style={{ width: 90 }}>
            إعادة تعيين
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
  });



const TableMainData = ({columns, URL, title})=>{
    let {getDataAsync } = useGet();
    let [propSearch, setPropSearch] = useState(null)
    let [myData, setMyData] = useState(null);
    let [myDataOnSearch, setMyDataOnSearch] = useState()
    let handleGetData = async()=>{
        let data = await getDataAsync(URL);
        setMyData(data?.ResponseObject || []);
        setMyDataOnSearch(data?.ResponseObject || [])
    }
    useEffect(()=>{
        handleGetData()
    }, [])


    return(
        <>
            <MessageRequest data={myData}/>

            <div className="flex justify-between">
              <Link to="add">
                  <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة {title} </Button>
              </Link>
                <div className="input_label_basic pe-4 w-2/12">
                    <label htmlFor="">{propSearch?.title}</label>
                    <Input disabled={propSearch ? false:true} onChange={(ev)=>setMyDataOnSearch(myData?.filter(ele => String(ele[propSearch?.dataIndex || propSearch?.search]).match(regxMatchFilterTable(ev.target.value))))} />
                </div>
            </div>



            <Spin spinning={myData === null ? true:false} fullscreen />

            <Table dataSource={myDataOnSearch} columns={columns} />
        </>

    )
}


export default TableMainData;
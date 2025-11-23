import { useEffect, useState } from "react";
import useGet from "../hooks/useGet";
import MessageRequest from "./MessageRequest";
import { regxMatchFilterTable } from "../helpers";
import { Link } from "react-router-dom";
import { Button, Input, Spin, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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

            <Table dataSource={myDataOnSearch} columns={columns.map(ele =>{ return {...ele,
                    onHeaderCell: (column) => ({
                      onClick: () => setPropSearch(column?.dataIndex || column?.search ? column:null),
                      style: { cursor: 'pointer' },
                    }),

            }})} />
        </>

    )
}


export default TableMainData;
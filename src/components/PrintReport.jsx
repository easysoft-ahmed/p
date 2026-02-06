import { Button, Dropdown, Space } from "antd";
import { useEffect, useState } from "react";
import { getFilesReport, postPrintReport } from "../services/PrintReportApi";
import { LoadingOutlined, PrinterFilled } from "@ant-design/icons";

const ButtonPrintReportPage = ({WindowName, DocId, title})=>{
    let [isFilesReport, setIsFilesReport] = useState([]);
    let [isLoading, setIsLoading] = useState(null);
    let callGetFilesReport = async()=>{
        setIsLoading(true);
        try {
            let response = await getFilesReport(WindowName);
            setIsFilesReport(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("خطاء في جلب ملفات التقارير");
            setIsLoading(false);
        }
    }
    
    let callPostPrintReport = async(ReportName)=>{
        setIsLoading(true);
        try {
            let response = await postPrintReport({WindowName, ReportName , DocId});
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const iframeUrl = URL.createObjectURL(blob);
            document.getElementById('my-iframe').src = iframeUrl;
            
            setTimeout(() => {
                document.getElementById('my-iframe')?.contentWindow.print()
            }, 100);

            setIsLoading(false);
        } catch (error) {
            console.error("خطاء في طباعة التقرير");
            setIsLoading(false);
        }

    }

    useEffect(()=>{
        callGetFilesReport()
    }, [])
    return(
        <>
        <iframe id="my-iframe" style={{display: "none"}} />
        {
            isFilesReport?.length === 1 ?
                <Button icon={isLoading ? <LoadingOutlined /> : <PrinterFilled />} disabled={isLoading} onClick={()=> callPostPrintReport(isFilesReport[0]) }>{title ? title : "طباعة"}</Button>
                :
                <Dropdown menu={{ items:  isFilesReport.map(ele => {return {label: <div onClick={()=> callPostPrintReport(isFilesReport[0]) }>{ele}</div>}})}} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <Button disabled={isLoading} icon={isLoading ? <LoadingOutlined /> : <PrinterFilled />}>{title ? title : "طباعة"}</Button>
                        </Space>
                    </a>
                </Dropdown>    
        }
        </>
    )
}


export default ButtonPrintReportPage;
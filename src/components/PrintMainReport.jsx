import { Button, Dropdown, Space } from "antd";
import { useEffect, useState } from "react";
import { getFilesReport, postPrintReport } from "../services/PrintReportApi";
import { LoadingOutlined, PrinterFilled } from "@ant-design/icons";

const PrintMainReport = ({WindowName, Filters})=>{
    let [isFilesReport, setIsFilesReport] = useState([]);
    let [isLoading, setIsLoading] = useState(null);
    
    let callPostPrintReport = async(ReportName)=>{
        setIsLoading(true);
        try {
            let response = await postPrintReport({WindowName, ...Filters});
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

    return(
        <>
        <iframe id="my-iframe" style={{display: "none"}} />
            <Button icon={isLoading ? <LoadingOutlined /> : <PrinterFilled />} disabled={isLoading} onClick={()=> callPostPrintReport(isFilesReport[0]) }>طباعة</Button>
        </>
    )
}


export default PrintMainReport;
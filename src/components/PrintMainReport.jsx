import { Button, Dropdown, Modal, Space } from "antd";
import { useEffect, useState } from "react";
import { getFilesReport, postPrintReport } from "../services/PrintReportApi";
import { LoadingOutlined, PrinterFilled } from "@ant-design/icons";

const PrintMainReport = ({WindowName, Filters})=>{
    let [pdfName, setPdfName] = useState(null);
    let [openReport, setOpenReport] = useState(false)
    let [isFilesReport, setIsFilesReport] = useState([]);
    let [isLoading, setIsLoading] = useState(null);

    let callPostPrintReport = async(ReportName)=>{
        setIsLoading(true);
        try {
            let response = await postPrintReport({WindowName, ...Filters});
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const iframeUrl = URL.createObjectURL(blob);
            setPdfName(iframeUrl)
            setTimeout(() => {
                setOpenReport(true)
            }, 100);

            setIsLoading(false);
        } catch (error) {
            console.error("خطاء في طباعة التقرير");
            setIsLoading(false);
        }

    }

    return(
        <>
            <Modal
                open={openReport}
                onCancel={()=>setOpenReport(false)}
                className="[&_.ant-modal-content]:h-screen [&_.ant-modal-body]:h-full [&_.ant-modal-body]:pt-5  top-0 p-0"
                footer={false}
                width={{
                    xs: '90%',
                    sm: '80%',
                    md: '70%',
                    lg: '60%',
                }}
            >
                <iframe src={pdfName} className="w-full h-full"  />
            </Modal>
            <Button icon={isLoading ? <LoadingOutlined /> : <PrinterFilled />} disabled={isLoading || !Filters?.ReportName} onClick={()=> callPostPrintReport(isFilesReport[0]) }>عرض التقرير</Button>
        </>
    )
}


export default PrintMainReport;
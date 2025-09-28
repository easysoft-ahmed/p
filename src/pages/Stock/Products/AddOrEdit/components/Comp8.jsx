import { InboxOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd"
import Dragger from "antd/es/upload/Dragger";

const Comp8 = ()=>{
    const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        }
        if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
    };

    return(
        <>
                {/* <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    // beforeUpload={beforeUpload}
                    // onChange={handleChange}
                >
                    {false ? (
                    <img draggable={false} src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                    ) : (
                        <button style={{ border: 0, background: 'none' }} type="button">
                            {false ? <LoadingOutlined /> : <PlusOutlined />}
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>

                    )}
                </Upload> */}


                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">انقر أو ضع ملف في هذة المنطقة لرفع الملف</p>
                            <p className="ant-upload-hint">
                                يمكن رفع ملف او اكثر من هنا
                            </p>
                        </Dragger>


        </>
    )
}

export default Comp8;
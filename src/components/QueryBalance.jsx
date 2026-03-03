import { DollarOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Form, InputNumber, Modal, DatePicker, Button, Row, Col, Card } from 'antd';
import locale from 'antd/es/date-picker/locale/ar_EG'; 

const QueryBalance = ()=>{
    let [isOpenModal, setIsOpenModal] = useState(false)

  const [form] = Form.useForm();


    return(
        <>
            <Modal
                open={isOpenModal}
                closable={false}
                footer={[
                    <Button  type="primary" onClick={()=>setIsOpenModal(false)}>
                    حفظ
                    </Button>,
                ]}
            >
                <div style={{ padding: '20px', background: '#f0f2f5'}}>
                    <Card title="البيانات المالية" bordered={false} style={{ maxWidth: 800, margin: 'auto' }}>
                        <Form
                        form={form}
                        layout="vertical"
                        dir="rtl" // لضبط الاتجاه للعربية
                        >
                            <Row gutter={[16, 0]}>
                                {/* العمود الأول */}
                                <Col span={12}>
                                    <Form.Item label="رصيد أول المدة" name="openingBalance">
                                        <InputNumber style={{ width: '100%' }} placeholder="0.00" />
                                    </Form.Item>
                                </Col>

                                {/* العمود الثاني */}
                                <Col span={12}>
                                    <Form.Item label="آخر دفعة نقدية" name="lastCashPayment">
                                        <InputNumber style={{ width: '100%' }} placeholder="0.00" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item label="آخر دفعة شيك" name="lastCheckPayment">
                                        <InputNumber style={{ width: '100%' }} placeholder="0.00" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item label="حد الائتمان" name="creditLimit">
                                        <InputNumber style={{ width: '100%' }} placeholder="0.00" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item label="التاريخ (من)" name="startDate">
                                        <DatePicker style={{ width: '100%' }} locale={locale} />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item label="التاريخ (إلى)" name="endDate">
                                        <DatePicker style={{ width: '100%' }} locale={locale} />
                                    </Form.Item>
                                </Col>

                                {/* الحقل السابع سيأخذ عموداً كاملاً أو نصف عمود حسب رغبتك */}
                                <Col span={24}>
                                    <Form.Item label="الرصيد" name="balance">
                                        <InputNumber style={{ width: '100%' }} placeholder="0.00" />
                                    </Form.Item>
                                </Col>
                            </Row>

                        </Form>
                    </Card>
                </div>
            </Modal>
            <Button onClick={()=>setIsOpenModal(true)} icon={<DollarOutlined />} />

        </>
    )
}

export default QueryBalance;
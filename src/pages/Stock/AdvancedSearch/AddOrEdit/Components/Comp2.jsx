import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Comp2 = ()=>{
    let myData = useSelector(state => state.advanced_search.value);
    let dispatch = useDispatch();

    const columns = [
        {
            title: 'كود الصنف',
            dataIndex: 'ProductID',
            render: text => <a>{text}</a>,
        },
        {
            title: 'اسم الصنف',
            dataIndex: 'Productname',
        },
        {
            title: 'اسم النوع',
            dataIndex: 'CategoryName',
        },
        {
            title: 'سعر البيع',
            dataIndex: 'MainUnitPrice',
        },
        {
            title: 'سعر الشراء',
            dataIndex: 'PurchPrice',
        },
        {
            title: 'سعر الجملة',
            dataIndex: 'GomlaPrice',
        },
        {
            title: 'سعر قطاعي',
            dataIndex: 'PartPrice',
        },
        {
            title: 'سعر وكلاء',
            dataIndex: 'AgentPrice',
        },
        {
            title: 'سعر مستهلك',
            dataIndex: 'UserPrice',
        },
        {
            title: 'الوحدة الافتراضية',
            dataIndex: 'MainUnitName',
        },
        {
            title: 'المخزن الافتراضي',
            dataIndex: 'StoreName',
        },
        {
            title: 'الحد الادنى',
            dataIndex: 'MinLimitQty',
        },
        {
            title: 'حد الطلب',
            dataIndex: 'LimitQty',
        },
        {
            title: 'الحد الاقصى',
            dataIndex: 'MaxLimitQty',
        },
        {
            title: 'رصيد الصنف',
            dataIndex: 'address',
        },
        {
            title: 'تكلفة الصنف',
            dataIndex: 'address',
        },
        {
            title: 'اخر سعر شراء',
            dataIndex: 'address',
        },
        {
            title: 'وصف الصنف',
            dataIndex: 'address',
        },
        {
            title: 'الكمية',
            dataIndex: 'address',
        },
    ];

    return(
        <div className="w-full overflow-auto [&_th]:text-nowrap [&_td]:text-nowrap mt-6 border-t">
            <Table
                rowSelection={{ type: "checkbox", /*...rowSelection */ }}
                columns={columns}
                dataSource={myData?.dataSelects?.products || []}
                
            />
        </div>
    )  
}

export default Comp2;
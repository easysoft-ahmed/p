import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Tree } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useGet from "../hooks/useGet";
import { edit_global } from "../redux/stateGlobal";

const TreeProduct = ({tableName, handleEditRow, ele})=>{
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
    const [selectedNode, setSelectedNode] = useState(null);
    let dispatch = useDispatch();
    let {getDataAsync} = useGet()
    let [treeData, setTreeData] = useState([]);



    const handleRightClick = ({ event, node }) => {
        event.preventDefault(); // Prevent default browser context menu
        setSelectedNode(node);
        setContextMenuPosition({ x: event.clientX, y: event.clientY });

        setContextMenuVisible(true);
    };

    const handleMenuClick = (e) => {
        console.log(`Clicked menu item: ${e.key} for node: ${selectedNode.title}`);
        setContextMenuVisible(false);
    };

    const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="add_root">إضافة جذر</Menu.Item>
        <Menu.Item key="add">إضافة</Menu.Item>
        <Menu.Item key="edit">تعديل</Menu.Item>
        <Menu.Item key="delete">حذف</Menu.Item>
    </Menu>
    );

    let handleProductTree = async()=>{
        let getTree = await getDataAsync("Stock/Products/ProductTree");
        setTreeData(JSON.parse(JSON.stringify([getTree?.ResponseObject]).replaceAll("ProductId", "key").replaceAll("productname", "title").replaceAll("Childern", "children").replaceAll("[]", "null")));
    }
    useEffect(()=>{
        handleProductTree()
    }, [])
        
    
    return(
        <>
            <h3 className="font-bold mb-4"> انواع الاصناف </h3>
            <div dir="ltr" className="flex flex-wrap justify-between [&>*]:w-5/12 gap-2">
                <Tree
                    showLine
                    switcherIcon={<DownOutlined />}
                    defaultExpandedKeys={['0-0-0']}
                    onSelect={(keys, info)=>{
                        !info.node.children && handleEditRow(tableName, "edit", ele.fakeID, {ProductName: info.node.title, ProductID: info.node.key});
                        !info.node.children && dispatch(edit_global({popupF3: false, popupF3Component: null}))}
                    }
                    treeData={treeData}
                    onRightClick={handleRightClick}
                />
                {contextMenuVisible && (
                    <Dropdown trigger={['click']} overlay={menu} visible={contextMenuVisible} onVisibleChange={setContextMenuVisible}>
                        <div
                            style={{
                            position: 'fixed',
                            left: contextMenuPosition.x,
                            top: contextMenuPosition.y,
                            zIndex: 1000, // Ensure it's above other elements
                            }}
                        />
                    </Dropdown>
                )}

            </div>
        </>

    )
}

export default TreeProduct;
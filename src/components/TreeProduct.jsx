import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Tree } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGet from "../hooks/useGet";
import { edit_global } from "../redux/stateGlobal";

const TreeProduct = ({tableName, handleEditRow, ele, onlyCategories, edit_product})=>{
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
    const [selectedNode, setSelectedNode] = useState(null);
    let dispatch = useDispatch();
    let {getDataAsync} = useGet()
    let [treeData, setTreeData] = useState([]);
    let categories = useSelector(state => state.product.value?.dataSelects?.categories)


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
        let getTree = await getDataAsync(onlyCategories ? "Stock/Products/ProductTree?isCatOnly=true" : "Stock/Products/ProductTree");
        setTreeData(JSON.parse(JSON.stringify([getTree?.ResponseObject]).replaceAll("ProductId", "key").replaceAll("productname", "title").replaceAll("Childern", "children").replaceAll("[]", "null")));
    }
    useEffect(()=>{
        handleProductTree()
    }, [])
        

        return(
            <div className={`${edit_product ? "lg:w-3/12":""} border-r px-4`}>
                <h3 className="font-bold mb-4"> شجرة الاصناف </h3>
                <div dir="ltr" className="w-full flex flex-wrap justify-between gap-2">
                    <Tree
                        showLine
                        switcherIcon={<DownOutlined />}
                        defaultExpandedKeys={['0-0-0']}
                        onSelect={
                            (keys, info)=>{
                                if(handleEditRow){
                                    if(info.node.ProdType === 2){
                                        handleEditRow(tableName, "edit", ele.fakeID, {ProductName: info.node.title, ProductID: info.node.key});
                                        dispatch(edit_global({popupF3: false, popupF3Component: null}))
                                    };

                                }else if(edit_product){
                                    let arr = [];
                                    let removePrefix = info.node.key?.replace("-cat", "");
                                    let check = categories.filter(ele => ele.CategoryID === Number(removePrefix))[0];
                                  
                                    if(check && check.UpCategoryID === 0){
                                        dispatch(edit_product({Productname: info.node.title, CategoryId: removePrefix}))
                                    }else if(check){
                                        function recurGetParent(categories, CateID){
                                            let filterCategories = categories.filter(ele => ele.CategoryID === CateID)[0];
                                            filterCategories && arr.push(filterCategories.CategoryName);
                                            if(filterCategories.UpCategoryID !== 0){                                                
                                                recurGetParent(categories, filterCategories.UpCategoryID);
                                            }
                                        }
                                        recurGetParent(categories, check.CategoryID)
                                        dispatch(edit_product({Productname: arr.reverse().join(" - "), CategoryId: removePrefix}))
                                    }
                                } 
                            }
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
            </div>
    
        )
    }

export default TreeProduct;
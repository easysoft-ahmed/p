import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Input, Menu, Modal, Tree } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGet from "../hooks/useGet";
import { edit_global } from "../redux/stateGlobal";
import usePost from "../hooks/usePost";
import { edit_product } from "../pages/Stock/Products/AddOrEdit/stateProduct";

const TreeProduct = ({tableName, handleEditRow, ele, onlyCategories, updateSelectCategories, edit_product_type_2})=>{
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
    const [selectedNode, setSelectedNode] = useState(null);
    let [UpCategoryID, setUpCategoryID] = useState(0);
    let [CategoryName, setCategoryName] = useState("");
    let [modalAddElement, setModalAddElement] = useState(false);
    let dispatch = useDispatch();
    let getDataSelectsFromProductState = useSelector(state => state.product.value?.dataSelects)
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();

    let [treeData, setTreeData] = useState([]);
    let categories = useSelector(state => state.product.value?.dataSelects?.categories)


    const handleRightClick = ({ event, node }) => {
        event.preventDefault(); // Prevent default browser context menu

        
        setSelectedNode(node);
        setUpCategoryID(node.key?.slice(0, node.key?.indexOf("-cat", 0)))
        setContextMenuPosition({ x: event.clientX, y: event.clientY });

        if(node.ProdType === 1){
            setContextMenuVisible(true);
        }
    };

    const handleMenuClick = (e) => {
        console.log(`Clicked menu item: ${e.key} for node: ${selectedNode.title}`);

        if(e.key === "add_root"){
            setUpCategoryID(0);
        }
        setModalAddElement(true);
        // setContextMenuVisible(false);
    };
    
    let handleProductTree = async(update)=>{
        let getTree = await getDataAsync(onlyCategories ? "Stock/Products/ProductTree?isCatOnly=true" : "Stock/Products/ProductTree");
        if(update && updateSelectCategories){

            let getCategories = await getDataAsync("Stock/Categories");
            dispatch(edit_product({dataSelects: {...getDataSelectsFromProductState, categories: getCategories?.ResponseObject || []}}))
        }
        setTreeData(JSON.parse(JSON.stringify([getTree?.ResponseObject]).replaceAll("ProductId", "key").replaceAll("productname", "title").replaceAll("Childern", "children").replaceAll("[]", "null")));
    }

    document.onclick = (e)=>{        
        if(!["dropmenu_item_root", "dropmenu_item_branch"].includes(e.target.parentNode.id)){
            setContextMenuVisible(false);
        }

    }
    
    let handleAddCategory = async()=>{        
        console.log(UpCategoryID + " ---- " + CategoryName);
        
        let response = await postDataAsync( "Stock/Categories", {UpCategoryID, CategoryName});
        if(response?.ResponseObject){
            handleProductTree(true);
            setModalAddElement(false);
            setCategoryName("");
        }
        console.log(response);
        
    }

    useEffect(()=>{
        handleProductTree()
    }, [])
        

        return(
            <div className={`w-full border-r px-4`}>
                <h3 className="font-bold mb-4"> شجرة الاصناف </h3>
                <Modal title={UpCategoryID === 0 ? "إضافة اسم الجذر" : "إضافة اسم العنصر"} closable={{ 'aria-label': 'Custom Close Button' }} open={modalAddElement}
                    onOk={handleAddCategory}
                    onCancel={()=>{
                        setCategoryName("")
                        setModalAddElement(false)
                    }}
                >
                    <Input value={CategoryName} onChange={(e)=>setCategoryName(e.target.value)} placeholder={UpCategoryID === 0 ? "ادخل اسم الجذر" : "ادخل اسم العنصر"}/>
                </Modal>

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

                                }else if(edit_product_type_2){
                                    let arr = [];
                                    let removePrefix = info.node.key?.replace("-cat", "");
                                    let check = categories.filter(ele => ele.CategoryID === Number(removePrefix))[0];
                                  
                                    if(check && check.UpCategoryID === 0){
                                        dispatch(edit_product_type_2({Productname: info.node.title, CategoryId: removePrefix}))
                                    }else if(check){
                                        function recurGetParent(categories, CateID){
                                            let filterCategories = categories.filter(ele => ele.CategoryID === CateID)[0];
                                            filterCategories && arr.push(filterCategories.CategoryName);
                                            if(filterCategories.UpCategoryID !== 0){                                                
                                                recurGetParent(categories, filterCategories.UpCategoryID);
                                            }
                                        }
                                        recurGetParent(categories, check.CategoryID)
                                        dispatch(edit_product_type_2({Productname: arr.reverse().slice(1).join(" - "), CategoryId: removePrefix}))
                                    }
                                } 
                            }
                        }
                        treeData={treeData}
                        onRightClick={handleRightClick}
                    />
                    {contextMenuVisible && 
                          <div style={{
                                position: 'fixed', left: contextMenuPosition.x, top: contextMenuPosition.y, zIndex: 1000 ,
                                marginTop: "1rem"
                            }}>
                                    <Menu id="dropmenu_tree" className="border rounded-md  bg-gray-200" onClick={handleMenuClick}>
                                        <Menu.Item id="dropmenu_item_root" key="add_root">إضافة نوع جذر</Menu.Item>
                                        <Menu.Item id="dropmenu_item_branch" key="add_branch">إضافة نوع فرع</Menu.Item>
                                    </Menu>
                            </div>
                        // <Dropdown trigger={['click']} overlay={menu} visible={contextMenuVisible} onVisibleChange={setContextMenuVisible}>
                        // <Dropdown menu={{ items }} open={contextMenuVisible} trigger={['click']} className="flex" >
                        //     {/* <div
                        //         style={{
                        //             position: 'fixed',
                        //             left: contextMenuPosition.x,
                        //             top: contextMenuPosition.y,
                        //             zIndex: 1000, // Ensure it's above other elements
                        //         }}
                        //     /> */}
                        // </Dropdown>
                    }
    
                </div>
            </div>
    
        )
    }

export default TreeProduct;
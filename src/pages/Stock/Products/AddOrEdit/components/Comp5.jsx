import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add_new_row_tables_product, edit_product, edit_row_tables_product, remove_row_tables_product } from "../stateProduct";

const Comp5 = ()=>{
    let myData = useSelector(state => state.product.value);
    let dispatch = useDispatch();

    return(
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-6/12">
                    <div class="relative overflow-x-auto mt-4 w-full">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="[&>*]:text-nowrap">
                                    <th scope="col" class="px-2">
                                        <button onClick={()=> dispatch(add_new_row_tables_product("ProductDescriptions"))}><PlusOutlined /></button>
                                    </th>
                                    <th scope="col" class="px-6 py-3">وصف الصنف</th>
                                </tr>
                            </thead>
                            <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                                {myData?.ProductDescriptions?.map((ele , index) =>
                                    <tr key={index}>
                                        {/* index */}
                                        <td className="text-center">
                                            <button onClick={()=> dispatch(remove_row_tables_product({tableName: "ProductDescriptions", fakeID: ele.fakeID}))}><CloseCircleOutlined /></button>
                                        </td>
                                        <td>
                                            <Input value={ele.Description} onChange={(event)=>dispatch(edit_row_tables_product({tableName: "ProductDescriptions", prop: "Description", value: event.target.value, fakeID: ele.fakeID}))}/>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
    )
}

export default Comp5;
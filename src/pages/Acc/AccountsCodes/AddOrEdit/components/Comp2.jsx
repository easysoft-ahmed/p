const Comp2 = ()=>{
    return(
            <div className="flex justify-center gap-2 self-start mt-6 ">
                <div className="flex flex-wrap content-start w-3/12 p-4 border rounded-md relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">طبيعة الحساب</h5>
                    <div className="[&>*]:py-2 [&_label]:px-2">
                        <div>
                            <input type="radio" name="debit_credit" id="debit_credit_credit"/>
                            <label htmlFor="debit_credit_credit">مدين</label>
                        </div>
                        <div>
                            <input type="radio" name="debit_credit" id="debit_credit_depit"/>
                            <label htmlFor="debit_credit_depit">دائن</label>
                        </div>
                        <div>
                            <input type="radio" name="debit_credit" id="debit_credit_both"/>
                            <label htmlFor="debit_credit_both">مدين / دائن</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap content-start w-3/12 p-4 border rounded-md relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">نوع الحساب</h5>
                    <div className="[&>*]:py-2 [&_label]:px-2">
                        <div>
                            <input type="radio" name="acc_type" id="acc_type_main"/>
                            <label htmlFor="acc_type_main">رئيسي</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_type" id="acc_type_child"/>
                            <label htmlFor="acc_type_child">فرعي</label>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap content-start w-3/12 p-4 border rounded-md relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">مجموعة الحساب</h5>
                    <div className="[&>*]:py-2 [&_label]:px-2">
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_1"/>
                            <label htmlFor="acc_group_1">اصول</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_2"/>
                            <label htmlFor="acc_group_2">خصوم</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_3"/>
                            <label htmlFor="acc_group_3">مصروفات</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_4"/>
                            <label htmlFor="acc_group_4">ايرادات</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_5"/>
                            <label htmlFor="acc_group_5">اخرى</label>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Comp2;
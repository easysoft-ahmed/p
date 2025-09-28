const Comp3 = ()=>{
    return(
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-full">
                        <label htmlFor="">السجل التجاري</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">البطاقة الضريبية</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">رقم التسجيل الضريبي</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
    )
}

export default Comp3;
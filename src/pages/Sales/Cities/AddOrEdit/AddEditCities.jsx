import { SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AddEditCities = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة منطقة</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">كود المنطقة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="">أسم المنطقة</label>
                        <input type="text" />
                    </div>
                    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCWj1fPUPxsgZEyVht8fqhtR4xreFP8H7gu6aDsfQIogENmlM+tIXzMHkB5wxG/S0M7h1Qq5ZiNB/936iIgtmiM1Bs8FW8JCD7KhmW/5/LVgqqbhuT+Ta3M4rpUcCb+5yktJx488WxAoWZP0PoW8TxISPo70k0sM8tnE2mE7/Cf40vUSXc4ONf/zqDxVQaHk9UQegZE9v/3Py0kyWtgp83CG13JiFiqIBMxE6srAMGPCCeVc8TOcpt59Dn8s5zwSY6Uyf25fjUQHNUiv4BTIgQSuhavltQlQcgTjWJgNsoMZqjFVrHfxSIcMnn8QPz9WjRhri47UwuqFZ3Lbqn7ZFEDL7tr8a4pOaeo/QDIEyrCZpOcNCWWd9hCPbbA8MeabNt/3MRq30VPEsoUfF5/gXCijET6jT4SdJZTXF+11Jvb7+CscAnd92knTVHotB7HVVY2NIzV0VytNtNjG9aXKJalcvPBBsGL8A+OcjFc2t2Jr/DdUspKN8656rZGQU5AFUnTcXAo8QUMUx7LezhyAgNp7Syluv/1aTRdwHb7wvcRz8qhGY8zegJULWbMVgt9NHZ5boA0oHgXn4XCkVXpyjZnsjMwI3Ls34glHutv18QXA+F2Grcm8LfKF/4ujWxLjkWgRY9t8z2yUhIFAUT/+o/GRcSRUKbXtNGUBoJ/CfK8Hw== your_email@example.com

                </div>
            </div>
        </>
    )
}

export default AddEditCities;
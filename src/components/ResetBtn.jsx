import { Button } from "antd";

const ResetBtn = ({resetMethod})=>{
    return(
        <>
            <Button onClick={resetMethod}>اعادة تعيين</Button>
        </>
    )
}

export default ResetBtn;
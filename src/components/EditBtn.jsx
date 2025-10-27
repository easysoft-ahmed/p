import { Button } from "antd";
import { Link } from "react-router-dom";

const EditBtn = ({url})=>{
    return(
        <>
            <Link to={url}>
                <Button color="cyan" variant="solid">تعديل</Button>
            </Link>
        </>
    )
}

export default EditBtn;
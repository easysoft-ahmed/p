import { LinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const TemplateOne = ({data})=>{
    return(
        <>
            {data.map(section => 
                <div className="section_row">
                    <h2 className="w-full">{section.name}</h2>
                    <div className="items_section">
                        {section.links.map(link => 
                            <Link to={link.path}> <span className="font-bold">{link.label}</span> <LinkOutlined /></Link>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default TemplateOne;
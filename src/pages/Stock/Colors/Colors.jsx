import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود اللون',
    dataIndex: 'ColorID',
    key: 'ColorID',
  },
  {
    title: 'اسم اللون',
    dataIndex: 'ColorName',
    key: 'ColorName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.ColorID}`} />
        <DeleteBtn url={`Stock/Colors?ColorID=${record.ColorID}`} />
      </>
      
    ),
    key: 'ColorID',
  },


];


const Colors = ()=>{

    return(
      <TableMainData columns={columns} URL={"Stock/Colors"} title="لون" />
    )
}

export default Colors;
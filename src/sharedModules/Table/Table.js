import React,{Fragment} from "react"
import "../Table/table.css"

const Update = (props) => {

const {selectProFrom}=props

const onRawClick=(row)=>{
if(selectProFrom){
    selectProFrom(row)

}
}
    let { headCells, tableBody } = props
    headCells = headCells ? headCells : []
    tableBody = tableBody ? tableBody : []

    const updatTable = (
    <table className='content-table'>
        <thead>

            <tr className='special'>

                {headCells&&headCells.length&&headCells.length>0&&headCells.map(item => {
                    return (<th >
                        {item.label}
                    </th>)
                })}
            </tr>

        </thead>
        <tbody>

            {tableBody&&tableBody.length&&tableBody.length>0&& tableBody.map(item => {
                return (<tr onClick={()=>onRawClick(item)}>
                    {
                        headCells.map((bd) => {
                            return (<td >
                                {item[bd.id]}

                            </td>)
                        })
                    }

                </tr>)
            })

            }
        </tbody>


    </table>)

    return (    <Fragment>

         
        {updatTable}
             
    </Fragment>
   )

}

export default Update

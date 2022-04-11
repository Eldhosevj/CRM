import React,{Fragment} from "react";
import Table from "../../../sharedModules/Table/Table"
import NavBar from "../../../sharedModules/NavigationBar/Navigation";
import { useNavigate } from 'react-router-dom';

import {useDispatch,useSelector } from "react-redux"
import {getUserRecord,getSingleRecord} from "../../FullProjectRecordTable/store/actionDispatcher"
const FullProjectRecordTable=(props)=>{
    let navigate = useNavigate()
    const [table,setTableData]=React.useState([])
const dispatch=useDispatch()
    const getTableDetails=(id)=>dispatch((getUserRecord(id)))
   const getSingleRecordFromTable=(row)=>dispatch((getSingleRecord(row)))
    const headCells=[
        {label:"NAME",id:"customer_name"},
        {label:"EMAIL",id:"email_id"},
        {label:"CONTACT NO",id:"pr_phone_no"},
        {label:"WEBSITE",id:"website"},
        {label:"address",id:"address"},
        
    ]
    
    const tableData=useSelector(state=>{
         let userDetails=state.userRecord&&state.userRecord.userDetails?state.userRecord.userDetails:[]
return userDetails
    })

    
React.useEffect(()=>{

    const loggedInUser= JSON.parse(window.localStorage.getItem("loginUser"))
  
  const id=loggedInUser&&loggedInUser.id?loggedInUser.id:null  
  getTableDetails(id)

},[])


const selectProFrom=(row)=>{
if(row){
    getSingleRecordFromTable(row)

    navigate("/NewQuation")
}
}

    return(
<Fragment>
    < NavBar/>
    <Table
    headCells={headCells}
    tableBody={tableData?tableData:[]}
    selectProFrom={selectProFrom}
    />
</Fragment>

    )


}
export default FullProjectRecordTable
import React,{Fragment} from 'react';

import SelectField  from '../SelectField/SelcectField';
const NavBar=()=>{


    const userDetails=JSON.parse(window.localStorage.getItem("loginUser"))
    

const [user,setUser]=React.useState(userDetails)
React.useEffect(()=>{
//setUser(userDetails)
},[userDetails])


const dashBord=(<div style={{width:"100vw",height:"70px",background:"#86298a",display:"flex"}}> 
<div style={{margin:"5px",width:"5vw",color:"white",fontSize:"20px"}}>
    <h4>
    CRM
    </h4>
</div>
<div style={{width:"40px",margin:"5px",color:"white"}}>
<SelectField
name="Sales"
chiled={[
{name:"Pipline",links:"/"},
{name:"myActivity",
links:"/NewQuation"},
{name:"DashBord",links:"/DashBord"}


]}
/>
</div>
<div style={{width:"70px",margin:"5px",color:"white"}}>

<h5>Reporting</h5>

</div>
<div style={{width:"50px",margin:"5px",color:"white"}}>
<h5>Settings</h5>
</div>

</div>
)

return(
<Fragment>
    {user&&user.accessToken?dashBord:null}
</Fragment>
)
}

export default NavBar
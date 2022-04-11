import React,{useState} from "react";
import {

    Link,NavLink

  } from "react-router-dom";

const SelectField=(props)=>{
const {chiled}=props
const [display,setDisplay]=useState(false)

const onClickDisplay=()=>{
    setDisplay(true)
}
const length=chiled.length*25
return(
<div  onMouseOver={onClickDisplay} onMouseLeave={()=>{
        setDisplay(false)
    }} style={{zIndex:"1",height:length+"px"}}>
    <h5 >
        {props.name}
        
    </h5>
{display&&<div style={{zIndex:"1",background:"white",position:"fixed",top:"50px"}}> 
      {chiled.map((item)=>{
        return (<div style={{padding:"4px",height:"25px",listStyle:"none",margin:"2px",textAlign:"center",fontFamily:"areal"}}>
            <NavLink style={{textDecoration:"none"}} to={item.links}>{item.name}</NavLink>

        </div>)
    })}
</div> }
 
</div>
)

}
export default SelectField
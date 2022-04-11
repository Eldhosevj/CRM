import React from "react";
import { Fragment } from "react";

import "./InputFieldComponet.css"
const InputField =(props)=>{

const {value,onChangeEvent,name,classNam,id,label,placeHolder,required,borderColor,
    width,height,backgroundColor,isLabalAndInputFieldSaveLine,


}=props
    
    return( 
<Fragment>
{isLabalAndInputFieldSaveLine?(
    <div style={{display:"flex",margin:"10px"}}>
{label&& <label style={{width:"190px",marginLeft:"5px",fontFamily:"areal",color:"#9403fc"}} for={id}>{required&&<span style={{color:"red"}}>*</span>}{label}</label>}
        <div></div>
        <div>   <input
    id={id}
    value={value}
    onChange={(e)=>onChangeEvent(e,name)}
    name={name}
    className={classNam}
    placeHolder={placeHolder}
    style={{borderBottom:`2px solid ${borderColor}`,width:width,height:height,
    backgroundColor:backgroundColor
}}
    />
 </div>
    </div>
):(<div>
    {label&& <label for={id}>{required&&<span style={{color:"red"}}>*</span>}{label}</label>}
    <br/>
    
        <input
        id={id}
        value={value}
        onChange={(e)=>onChangeEvent(e,name)}
        name={name}
        className={classNam}
        placeHolder={placeHolder}
        style={{borderBottom:`2px solid ${borderColor}`,width:width,height:height,
        backgroundColor:backgroundColor
    }}
        />
    
</div>)
}

    
</Fragment>

    )
}
export default InputField
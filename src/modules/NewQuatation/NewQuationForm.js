import React, { Fragment, useEffect, useState } from "react";

import InputField from "../../sharedModules/InputField/InputFieldComponent"
import NavBar from "../../sharedModules/NavigationBar/Navigation"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const NewQuationForm = () => {

    let navigate = useNavigate();

    const customerInfo = useSelector(state => {
        let newRow = state.userRecord && state.userRecord.row ? state.userRecord.row : {}
        return newRow

    })

    const initilaValue = {
        productPricing: "",
        expectedRevenue: "",
        probability: "",
        Custormer: customerInfo && customerInfo.customer_name ? customerInfo.customer_name : null,
        SalesPerson: "",
        ExpectedClosing: "",
        Email: customerInfo && customerInfo.email_id ? customerInfo.email_id : null,

        Phone: customerInfo && customerInfo.pr_phone_no ? customerInfo.pr_phone_no : null,
        Tags: customerInfo && customerInfo.website ? customerInfo.website : null

    }

    const [value, setValue] = useState(initilaValue)

    const backgroundColor = "white"

    const onChangeEvent = (e, name) => {
      let enterder=e.target.value
        setValue({...value, [name]: enterder })


    }
React.useEffect(()=>{

    console.log(value,"I am seeing value")
})

    const saveRecord = () => {
const url="http://localhost:8000/api/customer/1"
let updatedValue={
    
        "customer_name": value.Custormer,
        "pr_phone_no": value.Phone,
        "sc_phone_no": "8089960969",
        "website": value.Tags,
        "address": "Test 1, test address, test Apt, location, PIN 1234465788888888888888888",
        "email_id": value.Email
    }


axios.put(url,updatedValue)
.then(res=>{
if(res &&res.statusText=="OK"){
    navigate("/DashBord")

}
})
    }


    return (
        <Fragment>
            < NavBar />

            <div>
                <div><h6>MY ACTIVITY/NEW</h6></div>

                <div style={{ display: "flex" }}>
                    <button
                        onClick={() => saveRecord()}

                        style={{ width: "70px", height: "30px", borderRadius: "0px 0px 13px 13px", boxShadow: "0px 0px 3px 3px #827246" }

                        }
                    >save</button>
                    <button style={{ width: "70px", height: "30px", borderRadius: "0px 0px 13px 13px", boxShadow: "0px 0px 3px 3px #827246" }}
                    onClick={()=>{setValue(initilaValue)} }
                    >Discard</button>
                </div>
                <div style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px", boxShadow: "0px 0px 3px 3px #827246" }}>
                    {/*
            <div style={{borderBottom:"2px solid blue",height:"50px",display:"flex"}}>
            <div style={{border:"3px solid yellow",width:"81vw"}}>

            </div>
            <div style={{border:"3px solid yellow",width:"10vw"}}>
                
            </div>
            <div style={{border:"3px solid yellow",width:"10vw"}}>
                
            </div>
            </div>
    */}


                    <div >
                        <div>
                            <InputField

                                value={value.productPricing}
                                onChangeEvent={onChangeEvent}
                                name="productPricing"
                                id="productPricing"
                                placeHolder="e.g Product pricing"
                                width="500px"
                                height="30px"
                                borderColor="#9403fc"

                                backgroundColor={backgroundColor}
                            />

                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ marginRight: "5px" }}>
                                <InputField
                                    label="Expected Revenue"
                                    value={value.expectedRevenue}
                                    onChangeEvent={onChangeEvent}
                                    name="expectedRevenue"
                                    id="expectedRevenue"

                                    borderColor="#9403fc"
                                    backgroundColor={backgroundColor}
                                    isLabalAndInputFieldSaveLine={true}
                                />
                            </div>
                            <div>
                                <InputField
                                    label="Probability"
                                    value={value.probability}
                                    onChangeEvent={onChangeEvent}
                                    name="probability"
                                    id="probability"

                                    borderColor="#9403fc"
                                    backgroundColor={backgroundColor}
                                    isLabalAndInputFieldSaveLine={true}

                                />

                            </div>

                        </div>
                        <div style={{ display: "flex" }}>
                            <div>
                                <InputField
                                    label="Custormer"
                                    value={value.Custormer}
                                    onChangeEvent={onChangeEvent}
                                    name="Custormer"
                                    id="Custormer"
                                    borderColor="#9403fc"
                                    backgroundColor={backgroundColor}
                                    isLabalAndInputFieldSaveLine={true}

                                />

                            </div>
                            <div>
                                <InputField
                                    label="Sales Person"
                                    value={value.SalesPerson}
                                    onChangeEvent={onChangeEvent}
                                    name="SalesPerson"
                                    id="SalesPerson"
                                    borderColor="#9403fc"
                                    backgroundColor={backgroundColor}
                                    isLabalAndInputFieldSaveLine={true}

                                />
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div>
                                <InputField
                                    label="Email"
                                    value={value.Email}
                                    onChangeEvent={onChangeEvent}
                                    name="Email"
                                    id="Email"
                                    borderColor="#9403fc"
                                    backgroundColor={backgroundColor}
                                    isLabalAndInputFieldSaveLine={true}

                                />

                            </div>

                            <div>
                                <InputField
                                    label="Expected Closing"
                                    value={value.ExpectedClosing}
                                    onChangeEvent={onChangeEvent}
                                    name="ExpectedClosing"
                                    id="ExpectedClosing"
                                    borderColor="#9403fc"
                                    backgroundColor={backgroundColor}
                                    isLabalAndInputFieldSaveLine={true}

                                />

                            </div>

                        </div>


                        <div style={{ display: "flex" }}>
                            <div>                <InputField
                                label="Phone"
                                value={value.Phone}
                                onChangeEvent={onChangeEvent}
                                name="Phone"
                                id="Phone"
                                borderColor="#9403fc"
                                backgroundColor={backgroundColor}
                                isLabalAndInputFieldSaveLine={true}


                            />
                            </div>

                            <div>

                                <InputField
                                    label="Website"
                                    value={value.Tags}
                                    onChangeEvent={onChangeEvent}
                                    name="Tags"
                                    id="Tags"
                                    borderColor="#9403fc"
                                    backgroundColor={backgroundColor}
                                    isLabalAndInputFieldSaveLine={true}

                                />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </Fragment>
    )


}

export default NewQuationForm
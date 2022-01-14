import React from 'react';
import {useSelector} from "react-redux";


const Success = () => {

   const selector = useSelector(state =>{
    return{
        selectName:state.name,
        selectEmail:state.email,
        selectMob:state.mobile,
        selectPass:state.pass,
    }
})
    return (
        <div>
            <h1>successs logged in successfully !!</h1> 
            <br /><br />
            <h3>Name: {selector.selectName}</h3>
            <h4>Email: {selector.selectEmail}</h4>
            <h4>Mobile No.: {selector.selectMob}</h4>
        </div>
    );
};

export default Success;
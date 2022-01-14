import React from 'react';
import {useSelector} from "react-redux";
import { useSelector } from 'react-redux';

const Success = () => {
     // const selectName = useSelector(state => state.name);
    // const selectEmail = useSelector(state => state.email);
    // const selectPass = useSelector(state => state.pass);

   const selector = useSelector(state =>{
    return{
        selectName:state.name,
        selectEmail:state.email,
        selectPass:state.pass,
    }
})
    return (
        <div>
            successs logged in successfully !! {selector.selectName}
        </div>
    );
};

export default Success;
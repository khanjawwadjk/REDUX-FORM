import React from 'react';
import {useSelector} from "react-redux";

const Success = () => {
    const select = useSelector(state=> state.name)
    return (
        <div>
            successs logged in successfully !! {select}
        </div>
    );
};

export default Success;
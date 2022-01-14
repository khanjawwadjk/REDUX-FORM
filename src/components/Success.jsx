import React from 'react';
import {useSelector} from "react-redux";
import {Table} from "react-bootstrap";


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
            <h1>Congrats, Logged in successfully !!</h1> 
            <br /><br />

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{selector.selectName}</td>
                    <td>{selector.selectEmail}</td>
                    <td>{selector.selectMob}</td>
                    </tr>
                    </tbody>
            </Table>
        </div>
    );
};

export default Success;
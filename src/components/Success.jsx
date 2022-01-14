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
            <div style={{marginTop:"8rem",marginLeft:"23rem", backgroundColor:"aliceblue", padding:"20px", width:"50rem"}}>
            <h1><mark>Congrats</mark>, Logged in successfully !!</h1> 
            </div>
            <br /><br />

            <Table striped bordered hover style={{width:"50rem", margin:"20px auto"}}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td style={{padding:"20px", fontWeight:"bold", fontSize:"2rem"}}>{selector.selectName}</td>
                        <td style={{padding:"20px", fontWeight:"bold", fontSize:"2rem"}}>{selector.selectEmail}</td>
                        <td style={{padding:"20px", fontWeight:"bold", fontSize:"2rem"}}>{selector.selectMob}</td>
                    </tr>
                    </tbody>
            </Table>
        </div>
    );
};

export default Success;
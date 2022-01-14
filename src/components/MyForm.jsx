import React, {useRef} from "react"; 
import {Form, Button, Row, Col} from "react-bootstrap";
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
import {useNavigate} from "react-router-dom";




const MyForm = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const passRef = useRef(null);
    const mobileRef = useRef(null);

    
    //
    const dispatchName = () =>{
        let refDataName = nameRef.current.value;
        let regex = new RegExp(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/);
        
        if(refDataName === ""){
            swal("Name can't be empty","","error");
            return false;
        }else if(refDataName.length < 3 || refDataName.length > 12){
            swal("Name should be in between 3 & 12 chars only","","error");
            return false;
        }else if(regex.test(refDataName) === false){
            swal("Invalid Name",`Alphabet Only`,"error");
            return false;
        }else{
            dispatch({
                type:"VNAME",
                payload:refDataName,
            }) 
            return true;
        }
    }
    //
    const dispatchEmail = () =>{
        let refDataEmail = mailRef.current.value;
        let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        
        if(refDataEmail === ""){
            swal("Email can't be empty","","error");
            return false;
        }else if(regex.test(refDataEmail) === false){
            swal("Invalid Email","Should match RegExp","error");
            return false;
        }else{
            dispatch({
                type:"VMAIL",
                payload:refDataEmail,
            })
            return true;
        }
    }
    //
    const dispatchMobile = ()=>{
        let refDataMob = mobileRef.current.value;
        let regex = new RegExp(/^[6-9][0-9]{9}$/);

        if(refDataMob === ""){
            swal("Mobile can't be empty","","error");
            return false;
        }else if(regex.test(refDataMob) === false){
            swal("Invalid Mobile No.","Should match RegExp","error");
            return false;
        }else{
            dispatch({
                type:"VMOBILE",
                payload:refDataMob,
            })
            return true;
        }

    }
    //
    const dispatchPass = () =>{
        let refDataPass = passRef.current.value;
        let regex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
        
        if(refDataPass === ""){
            swal("Password can't be empty","","error");
            return false;
        }else if(refDataPass.length<4 || refDataPass.length>8){
            swal("Name should be in between 4 & 8 chars only","","error");
            return false;
        }else if(regex.test(refDataPass) === false){
            swal("Invalid Password","Should match RegExp","error");
            return false;
        }else{
            dispatch({
                type:"VPASS",
                payload:refDataPass,
            })
            return true;
        }
    }
    
    const dispatchData = (e) =>{
        e.preventDefault();
        
        if(dispatchName() && dispatchEmail() && dispatchMobile() && dispatchPass()){
            swal("Dispatched","","success");
            navigate('/success');
        }else{
            swal("sorry, Invalid Entries :((","","error");
        }
    }
    
    //css
    const myStyle= {
        margin:"10rem auto",
        marginLeft:"20rem",
        marginTop:"5rem",
        
        
        myForm:{
            border:"2px solid black",
            borderRadius:"20px",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.76)",
            padding:"80px",
            width:"50rem",
            height:"30rem",
            background: "linear-gradient(90deg, rgba(117,114,161,1) 0%, rgba(83,147,170,1) 90%)", 
        }  
    }
    return(
        <div style={myStyle}>
            
          <Form style={myStyle.myForm}>  
          <h2 style={{marginBottom:"3rem", marginTop:"-3rem", fontSize:"2.3rem", textAlign:"left"}}><u>Sign Up</u></h2>       
              <Row>
                <Col md={2}>
                    <Form.Label><b>Name:</b></Form.Label>
                </Col>
                <Col md={8}>
                    <Form.Control type="text" placeholder="Name" ref={nameRef} onBlur={()=>dispatchName()}/>
                </Col>
              </Row>
              <br />
              <Row>
              <Col md={2}>
                <Form.Label><b>Email:</b></Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control type="text"  placeholder="email" ref={mailRef} onBlur={()=>dispatchEmail()}/>
              </Col>
              </Row>
              <br />
              <Row>
              <Col md={2}>
                <Form.Label><b>Mobile:</b></Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control type="text"  placeholder="mobile" ref={mobileRef} onBlur={()=>dispatchMobile()}/>
              </Col>
              </Row>
              <br />
              <Row>
              <Col md={2}>
              <Form.Label><b>Password:</b></Form.Label>
              </Col>
              <Col md={8}>
              <Form.Control type="password"  placeholder="pass" ref={passRef} onBlur={()=>dispatchPass()}/>
              </Col>
              </Row>
              <br />
              <Row>
                  <Col md={1}></Col>
                  <Col md={2}></Col>
                  <Col md={4}>
                    <Button style={{width:"12rem", color:"white", padding:"15px", fontWeight:"bold"}} variant="outline-secondary" onClick={(e)=>dispatchData(e)}>Login</Button>
                  </Col>
                  <Col></Col>
              </Row>

          </Form>
        
        </div>
    )
}

export default MyForm;
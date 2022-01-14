import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
  name:"", 
  email:"", 
  mobile:"",
  pass:"",
}

const reducer = (state=initialState, action) =>{
    console.warn("initial state", state);
    switch(action.type){
      case "VNAME": return{
        ...state, name:state.name + action.payload,
      }
      case "VMAIL": return{
        ...state, email:state.email + action.payload,
      }
      case "VPASS": return{
        ...state, pass:state.pass + action.payload,
      }
      case "VMOBILE": return{
        ...state, mobile:state.mobile + action.payload,
      }
      default:return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

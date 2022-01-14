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
  pass:"",
  mobile:"",
}

const reducer = (state=initialState, action) =>{
    console.warn("initial state", state);
    console.warn("action", action);
    switch(action.type){
      case "VNAME": return{
        ...state, name: action.payload,
      }
      case "VMAIL": return{
        ...state, email: action.payload,
      }
      case "VPASS": return{
        ...state, pass: action.payload,
      }
      case "VMOBILE": return{
        ...state, mobile: action.payload,
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

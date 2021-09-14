import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from '../utils/utils';
import { loginContext } from "../context/context";
import InputField from '../components/InputField';

import {
  validateEmail,
  validateUserName,
  validateZipCode
} from "../utils/utils";
const Checkout = () => {
  const {login} = useContext(loginContext);

  const history = useHistory();

  useEffect(() => {
    if (!login) {
      history.replace("/login")
    }
  }, [login])
  
  const [errorTypeName, setErrorTypeName] = useState("");
  const [errorTypeMail, setErrorTypeMail] = useState("");
  const [errorTypeStreet, setErrorTypeStreet] = useState("");
  const [errorTypeZipcode, setErrorTypeZipcode] = useState("");
  let [orderData, setorderData] = useState({
    name: '',
    email: '',
    street: "",
    zipCode: '',
  });

  const change = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    setorderData((preVal) => {
      return { ...preVal, [name]: value }
    })

  }

  const click = () => {
    const nameError = validateUserName(orderData.name);
    const streetError = validateUserName(orderData.street);
    const emailError = validateEmail(orderData.email);
    const zipcodeError =   validateZipCode(orderData.zipCode);
    if (nameError !== "") {
      setErrorTypeName(nameError)
      setErrorTypeMail("")
      setErrorTypeStreet("")
      setErrorTypeZipcode("")
      
    }else if(emailError!== ""){
      setErrorTypeMail(emailError)
      setErrorTypeName("")
      setErrorTypeStreet("")
      setErrorTypeZipcode("")
      
    }else if(streetError!== ""){
      setErrorTypeStreet(streetError)
      setErrorTypeName("")
      setErrorTypeMail("")
      setErrorTypeZipcode("")
    }else if(zipcodeError!== ""){
      setErrorTypeZipcode(zipcodeError)
      setErrorTypeStreet("")
      setErrorTypeName("");
      setErrorTypeMail("");

    }else {
      
      setErrorTypeName("");
      setErrorTypeMail("");
      setErrorTypeStreet("")
      setErrorTypeZipcode("")

    
    const items = getLocalStorage("items");
    setLocalStorage("items", { ...items, orderData })
    const userData = getLocalStorage("items");
    setLocalStorage("orderList", [...((getLocalStorage("orderList") || null) || []), userData])
    
    setorderData({
      name: '',
      email: '',
      street: "",
      zipCode: '',
    });
    history.push("order")

  }
}

  return (
    <>
      <div className="w-40 box-shadow-ccc b-1-c9  p-3 m-3-auto d-flex flex-d-column flex-align-center">

        <span id="after" className="f-014 mb-2"></span>
        <InputField type="text" onChange={change} error={errorTypeName} name='name' placeholder="Name" value={orderData.name}/>
        <InputField type="email" onChange={change} error={errorTypeMail} name='email' placeholder="Email" value={orderData.email}/>
        <InputField type="text" onChange={change}  error={errorTypeStreet} name='street'   placeholder="Street" value={orderData.street}/>
        <InputField type="text" onChange={change} error={errorTypeZipcode} name='zipCode'  placeholder="Zip code" value={orderData.zipCode}/>

        <button onClick={click} className="f-bold f-family-monospace f-017 bg-white outline-none b-none green mb-2 mt-2 cursor-pointer"> Order</button>


      </div>
    </>


  );
}


export default Checkout;
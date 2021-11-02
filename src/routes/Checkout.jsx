import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage, setLocalStorage,validateUserName, validateZipCode } from '../utils/utils';
import { loginContext } from "../context/context";
import InputField from '../components/InputField';


const Checkout = () => {
  const {login,user} = useContext(loginContext);
// console.log("user" , user)
  const history = useHistory();

  useEffect(() => {
    if (!login) {
      history.replace("/login")
    }
  }, [login])
  
  const [errorTypeStreet, setErrorTypeStreet] = useState("");
  const [errorTypeZipcode, setErrorTypeZipcode] = useState("");
  let [orderData, setorderData] = useState({
    name: [user?.name?.split(" ")[0]]?.join(),
    email: user?.mail,
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
    const streetError = validateUserName(orderData.street);
    const zipcodeError =   validateZipCode(orderData.zipCode);

    if(streetError!== ""){
      setErrorTypeStreet(streetError)
      setErrorTypeZipcode("")
    }else if(zipcodeError!== ""){
      setErrorTypeZipcode(zipcodeError)
      setErrorTypeStreet("")

    }else {
      
      setErrorTypeStreet("")
      setErrorTypeZipcode("")

    
    const items = getLocalStorage("items");
    setLocalStorage("items", { ...items, orderData })
    const userData = getLocalStorage("items");
    setLocalStorage("orderList", [...((getLocalStorage("orderList") || null) || []), userData])
    
    setorderData({
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
        <InputField type="text" disabled onChange={change} name='name' placeholder="Name" value={orderData.name}/>
        <InputField type="email" disabled onChange={change} name='email' placeholder="Email" value={orderData.email}/>
        <InputField type="text" onChange={change}  error={errorTypeStreet} name='street'   placeholder="Street" value={orderData.street}/>
        <InputField type="number" onChange={change} error={errorTypeZipcode} name='zipCode'  placeholder="Zip code" value={orderData.zipCode}/>

        <button onClick={click} className="f-bold f-family-monospace f-017 bg-white outline-none b-none green mb-2 mt-2 cursor-pointer"> Order</button>


      </div>
    </>


  );
}


export default Checkout;
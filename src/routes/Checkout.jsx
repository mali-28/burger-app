import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Checkout = () => {
  const history = useHistory();

  let [orderData, setorderData] = useState({
    name : '',
    email : '',
    street : "",
    zipCode : '',
    country : '',
});

const change = (event) => {
   event.preventDefault();
   let {name, value} = event.target;
   setorderData((preVal)=>{
       return {...preVal, [name] : value}
   })

}

const click = () =>{
        
  const items = JSON.parse(localStorage.getItem("items"));
  localStorage.setItem("items", JSON.stringify({...items,orderData}))
  const userData = JSON.parse(localStorage.getItem("items"));
  localStorage.setItem("orderList", JSON.stringify([...(JSON.parse(localStorage.getItem("orderList") || null) || []), userData ]))  

  setorderData({
    name : '',
    email : '',
    street : "",
    zipCode : '',
    country : '',
    });
    history.push("userOrder")
  
}



  return (
    <>
      <div className="w-40 box-shadow-ccc b-1-c9  p-3 m-3-auto d-flex flex-d-column flex-align-center">

        <span id="after" className="f-014 mb-2"></span>
        <input type="text" onChange={change} name='name' className="input mb-2  f-family-monospace" value={orderData.name} placeholder="Name"/>
        <input type="text" onChange={change} name='street' className="input mb-2  f-family-monospace" value={orderData.street} placeholder="Street"/>
        <input type="text" onChange={change} name='zipCode' className="input mb-2  f-family-monospace" value={orderData.zipCode} placeholder="Zip code"/>
        <input type="text" onChange={change} name='country' className="input mb-2  f-family-monospace" value={orderData.country} placeholder="Country"/>
        <input type="email" onChange={change} name='email' className="input mb-2  f-family-monospace" value={orderData.email} placeholder="Email" />

        <button onClick={click} className="f-bold f-family-monospace f-017 bg-white outline-none b-none green mb-2 mt-2 cursor-pointer"> Order</button>


      </div>
    </>


  );
}

export default Checkout;
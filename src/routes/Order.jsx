import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { loginContext } from "../context/context";

const Order = () => {
    const history = useHistory();
    const {login} = useContext(loginContext);

    const orderList = JSON.parse(localStorage.getItem("orderList") || null) || [];
    useEffect(()=>{
      if(!login){
          history.replace("UserLogin")
      }
  },[login])

  return (<>
  <h1 className="t-center mt-2 red">Orders</h1>
  {orderList?.map((val,id)=>{
    return<>
    <div key={id} style={{width : "450px", height: "200px", border : "1px solid #ccc", margin : "10px auto"}}>
       <div>Ingredients : Lettuse ({val.Lettuce}) , Bacon ({val.Bacon}), Cheese ({val.Cheese}), Meat ({val.Meat})</div>
       <div>UserDetail: Name({val.orderData.name}) , email ({val.orderData.name}), Zip-code({val.orderData.zipCode}), Country ({val.orderData.country}), Street ({val.orderData.street})</div>
    </div>
    </>

})}</>
      
    
   
  );
}

export default Order;
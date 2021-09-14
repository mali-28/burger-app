import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { loginContext } from "../context/context";
import { products } from "../products/products";
import { getLocalStorage } from "../utils/utils";
const Order = () => {
    const history = useHistory();
    const {login} = useContext(loginContext);

    const orderList = getLocalStorage("orderList") || null || [];
    useEffect(()=>{
      if(!login){
          history.replace("UserLogin")
      }
  },[login])

  return (<>
  <h1 className="t-center mt-3 red">Orders</h1>
  {orderList?.map((val,id)=>{
    return<>
    <div key={id} className="w-45 h-20 m-1-auto d-flex j-content-between">
    <table className="b-01-red">
              <thead>
                    <tr className="body">
                      <td className="t-center red" colSpan="2">User Detail </td>
                    </tr>
                  </thead>
                  <tbody >
                  <tr className="body">
                    <td className="red">Name</td>
                    <td className="success">{val.orderData.name}</td>
                    </tr>

                    <tr className="body">
                    <td className="red">Email</td>
                    <td className="success">{val.orderData.email}</td>
                    </tr>

                    <tr className="body">
                    <td className="red">Street</td>
                    <td className="success">{val.orderData.street}</td>
                    </tr>

                    <tr className="body">
                    <td className="red">zipcode</td>
                    <td className="success">{val.orderData.zipCode}</td>
                    </tr>
                  
                </tbody>
              </table>
    <table className="b-01-red">
              <thead>
                    <tr className="body">
                      <td className="red">Ingredients</td>
                      <td className="red">quantity</td>
                      <td className="red">price</td>
                    </tr>
                  </thead>
                  <tbody>
                {products.map((elem)=>{
                 
                  return <>
                  <tr key={elem.id} className="body">
                    <td className="red">{elem.title}</td>
                    <td className="success t-center">{val[elem.title]["number"]}</td>
                    <td className="success t-center">{val[elem.title]["amount"]}</td>
                    </tr>
                  </>
                })}
                <tr className="body b-top-1-ccc">
                  <td  className="yellow" colSpan="2">Total</td>
                  <td className="yellow">${val.total}</td>
                </tr>
                </tbody>
              </table>
   
    </div>
    </>

})}</>
      
    
   
  );
}

export default Order;
   
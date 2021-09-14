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
  <h1 className="t-center mt-3">Orders</h1>
  {orderList?.map((val,id)=>{
    return<>
    <div key={id} className="w-45 h-20 b-01-solid-ccc m-1-auto d-flex j-content-between">
    <table className="b-01">
              <thead>
                    <tr className="body">
                      <td colSpan="2">User Detail </td>
                    </tr>
                  </thead>
                  <tbody >
                  <tr className="body">
                    <td>Name</td>
                    <td>{val.orderData.name}</td>
                    </tr>

                    <tr className="body">
                    <td>Email</td>
                    <td>{val.orderData.email}</td>
                    </tr>

                    <tr className="body">
                    <td>Street</td>
                    <td>{val.orderData.street}</td>
                    </tr>

                    <tr className="body">
                    <td>Zip-code</td>
                    <td>{val.orderData.zipCode}</td>
                    </tr>
                  
                </tbody>
              </table>
    <table className="b-01">
              <thead>
                    <tr className="body">
                      <td>Ingredients</td>
                      <td>quantity</td>
                      <td>price</td>
                    </tr>
                  </thead>
                  <tbody>
                {products.map((elem)=>{
                 
                  return <>
                  <tr key={elem.id} className="body">
                    <td>{elem.title}</td>
                    <td>{val[elem.title]["number"]}</td>
                    <td>{val[elem.title]["amount"]}</td>
                    </tr>
                  </>
                })}
                </tbody>
              </table>
   
    </div>
    </>

})}</>
      
    
   
  );
}

export default Order;
   
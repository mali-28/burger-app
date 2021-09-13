import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { loginContext } from "../context/context";
import { products } from "../products/products";
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
    <table>
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
                    {/* {console.log("order", val)} */}
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
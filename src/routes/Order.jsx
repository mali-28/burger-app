const Order = () => {
 
    const orderList = JSON.parse(localStorage.getItem("orderList") || null) || [];
    
  return (<>
  <h1>Orders</h1>
  {orderList?.map((val)=>{
    return<>
    <div style={{width : "500px", height: "200px", border : "1px solid #ccc", margin : "10px auto"}}>
       <div>Ingredients : Lettuse ({val?.Lettuce}) , Bacon ({val?.Bacon}), Cheese ({val?.Cheese}), Meat ({val?.Meat})</div>
       {/* <div>UserDetail: Name({val.orderData.name}) , email ({val.orderData.name}), Zip-code({val.orderData.zipCode}), Country ({val.orderData.country}, Street ({val.orderData.street})</div> */}
    </div>
    </>

})}</>
      
    
   
  );
}

export default Order;
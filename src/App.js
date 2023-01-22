import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncAction/customers";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";


const App = ()=> {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customers);

  const addCash = (cash) => {
    dispatch({type:"ADD_CASH",payload:cash})
  };

  
  const getCash = (cash) => {
    dispatch({type:"GET_CASH",payload:cash})
  };

  const addCustomer = (name) =>{
    const newCustomer ={
      name,
      id:Date.now()
    }
    dispatch(addCustomerAction( newCustomer))
  }

  const removeCustomer = (customer) =>{
    dispatch(removeCustomerAction(customer.id))
  }
  return (
    <div className="App">
        <div>{cash}</div>
        <button onClick={() => addCash(+prompt())}>Add cash</button>
        <button onClick={() => getCash(+prompt())}>Get cash</button>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => getCash(+prompt())}>Get cash</button>
        <button onClick={() => dispatch(fetchCustomers())}>Get clients from db</button>
        <div>
          {customers.length > 0 ?
            <div>
              {customers.map(cus => 
                <div onClick={()=>removeCustomer(cus)}>
                  {cus.name}
                </div>
              )}
            </div>
            :<h1>
              лкиенты 0
            </h1>
          }
        </div>
    </div>
  );
}

export default App;

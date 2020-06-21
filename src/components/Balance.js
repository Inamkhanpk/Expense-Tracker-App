import React, { useContext } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';

export const Balance = () => {
  const { buyandsellitems} = useContext(GlobalContext);

 

  const Income = () => {
    let income = 0;
    for (var i = 0; i < buyandsellitems.length; i++) {
        if (buyandsellitems[i].amount > 0)
            income = income + buyandsellitems[i].amount
        }
    return income;
    
}


const Expense = () => {
  let expense = 0;
  for (var i = 0; i < buyandsellitems.length; i++) {
      if (buyandsellitems[i].amount < 0)
          expense = expense + buyandsellitems[i].amount
  }
  return expense;
}




  return (
    <div className="card text-center  balance ">
     
      <h4 className="card-title " >Your Balance</h4>
      <h1 className="card-text ">{Income() + Expense()} PKR </h1>
    
      
    </div>
  )
}
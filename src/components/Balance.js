import React, { useContext } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';

export const Balance = () => {
  const { buyandsellitems} = useContext(GlobalContext);

 

  const getIncome = () => {
    let income = 0;
    
    for (var i = 0; i < buyandsellitems.length; i++) {
        if (buyandsellitems[i].amount > 0)
            income = income + buyandsellitems[i].amount
    }
    
    return income;
    
}


const getExpense = () => {
  let expense = 0;
  for (var i = 0; i < buyandsellitems.length; i++) {
      if (buyandsellitems[i].amount < 0)
          expense = expense + buyandsellitems[i].amount
  }
  return expense;
}




  return (
    <div className="card text-center text-white bg-secondary">
     
      <h4 className="card-title" >Your Balance</h4>
      <h1 className="card-text ">{getIncome() + getExpense()} PKR </h1>
    
      
    </div>
  )
}
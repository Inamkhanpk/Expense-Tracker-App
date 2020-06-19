import React, { useContext } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';

export const IncomeAndExpense = () => {

  const { buyandsellitems } = useContext(GlobalContext);

  

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
          expense += buyandsellitems[i].amount
  }
  return expense;
}


  return (
    <div className="d-flex  justify-content-between text-center mt-5">

        <div className="card flex-grow-1 m-1 ">
          <h4 className="card-title">Income</h4>
          <p className="card-text">{getIncome()} PKR</p>
        </div>

        <div className="card flex-grow-1 m-1">
          <h4 className="card-title">Expense</h4>
          <p className="card-text">{getExpense()} PKR</p>
        </div>

      </div>
  )
}
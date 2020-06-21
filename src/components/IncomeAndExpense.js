import React, { useContext } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';

export const IncomeAndExpense = () => {

  const { buyandsellitems } = useContext(GlobalContext);

  

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
    <div className="d-flex  justify-content-between text-center mt-5  ">

        <div className="card flex-grow-1 m-1 balance ">
          <h4 className="card-title">Income</h4>
          <p className="card-text">{Income()} PKR</p>
        </div>

        <div className="card flex-grow-1 m-1 balance">
          <h4 className="card-title">Expense</h4>
          <p className="card-text">{Expense()} PKR</p>
        </div>

      </div>
  )
}
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../contextAPI/GlobalState';
import { v4 as uuidv4 } from 'uuid';

export const AddBuyandSellItems = () => {


  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState(0);

  const { addBuyandSellItem } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    
    if (Number(amount) === 0) {
        alert("Please enter correct value");
        return false;
    }

    if(product === ""){
      alert("Please enter product")
    }

    const newitems = {
      id: uuidv4(),
      product,
      amount:Number(amount)
    }

    addBuyandSellItem(newitems);

  setProduct("")
  setAmount("")
  }

  return (
<div className=" card text-center bg-secondary text-white mt-5 p-1">
      <h3 className="card-title">Add Transactions</h3>
      <form >

        <div className="form-group">
          <label htmlFor="product">Text</label>
          <input 
          type="text" 
          className="form-control" 
          value={product} 
          onChange={(e) => setProduct(e.target.value)} 
          placeholder="Enter Product..." />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount <br />
          Income is (+ve),Expense is (-ve)</label >
          <input 
          type="number" 
          className="form-control" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Enter amount..." />
        </div>

        <button 
        type="button" 
        className="btn btn-primary" onClick={onSubmit}>
            Add 
            <i class="fa fa-plus-circle m-1" aria-hidden="true"></i>
        </button>

      </form>
    </div>
  )
}
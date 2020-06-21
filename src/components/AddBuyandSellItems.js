import React, {useState, useContext} from 'react'
import { GlobalContext } from '../contextAPI/GlobalState';
import { v4 as uuidv4 } from 'uuid';

export const AddBuyandSellItems = () => {
  
  const [userRequest, setUserRequest] = useState({
    amount: "",
    product: "",
  });

  
  const [errors,setErrors] = useState({
    product: null,
    amount: null
  })


  const { addBuyandSellItem } = useContext(GlobalContext);




  const handleValidation =()=>{
    let valid =true 
    let errors = {}
    if (Number(amount) === 0) {
      
      errors.amount ="Please enter + or - value"
      valid= false;
  }

  if(product === ""){
    
    errors.product="Please Enter Relevant Description"
    valid= false;
  }
  setErrors({...errors})
  return valid
  };
   
    
    function handleChange(event) {
      
       
       setUserRequest({ ...userRequest, [event.target.name] : event.target.value });;
    }


  const onSubmit = e => {
    e.preventDefault();
    
  
    if(handleValidation()){
      
      const newitems = {
        id: uuidv4(),
        product:userRequest.product,
        amount:Number(userRequest.amount)
      }
  
      addBuyandSellItem(newitems);
      
   
    setUserRequest({
      
      product:'',
      amount:''
   })
   }

    
  }


 
  const { product, amount} = userRequest;
  
  return (
    <div className=" card text-center balance  mt-5 p-1 ">
      <h3 className="card-title">Add Transactions</h3>
      
      <form >

        <div className="form-group">
          <label htmlFor="product">Text</label>
          <input
          name="product" 
          type="text" 
          className="form-control" 
          value={product }
          onChange={handleChange} 
          placeholder="Enter Product..." required
          
          />
           
        </div>
        <span style={{color: "red" }}>{errors.product ? errors.product : null}</span>

        <div className="form-group">
          <label htmlFor="amount">Amount <br />
          Income is (+ve),Expense is (-ve)</label >
          <input 
          name="amount"
          type="number" 
          className="form-control" 
          value={amount }
          onChange={handleChange} 
          placeholder="Enter amount..." required />
          
        </div>
        <span style={{color: "red"}}>{errors.amount ? errors.amount : null}</span>
        <br/>
        
    
        <button 
        type="button" 
        className="btn " onClick={onSubmit}>
          <i className="fa fa-plus-circle m-1" aria-hidden="true"></i>
        </button>
        

      </form>

      
    </div>
  )
}
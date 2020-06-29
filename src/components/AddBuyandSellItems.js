import React, {useState, useContext} from 'react'
import { GlobalContext } from '../contextAPI/GlobalState';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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
    <div className=" card text-center   mt-5 p-1 ">
      <h3 className="card-title">Add Transactions</h3>
      
      <form >

        <div className="form-group px-5">
          
        <TextField
          label="Enter Description"
          name="product" 
          type="text" 
          error={errors.product ? true: false}
          defaultValue="Enter Description"
          helperText={errors.product}
          required={true}
          value={product }
          onChange={handleChange} 
          fullWidth={true}
          className="form-control " 
        />
        </div>
        

        <div className="form-group px-5">
        <TextField
        label="Enter Number"
           name="amount" 
           type="number"
          error={errors.amount ? true: false}
          defaultValue="Enter Deescription"
          helperText={errors.product}
          required={true}
          value={amount }
          onChange={handleChange} 
          fullWidth={true}
          className="form-control " 
        />
          
        </div>
      
        <br/>
      

        <span style={{color: "red"}}  onClick={onSubmit}>< AddCircleIcon /></span>

      </form>

      
    </div>
  )
}
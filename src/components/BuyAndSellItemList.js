
import React, { useContext } from 'react';

import { GlobalContext } from '../contextAPI/GlobalState';

export const BuyAndSellItemList = () => {
  
  const { deleteBuyandSellItem, buyandsellitems} = useContext(GlobalContext);



  return (
    <div className="rounded text-center  bg-secondary mt-5 p-2">
      <h3 className="text-white"> History</h3>


      <ul className="list-group">
          {buyandsellitems.map(items => (
            <div key={items.id} className="mt-1">
            <li className="list-group-item">
                <div className="d-flex flex-wrap justify-content-between">

                  <div>
                  {items.product} 
                  </div>

                  <span className={items.amount< 0 ? 'border-danger  border text-center' :'border-warning  border text-center'}>
                  {items.amount} PKR
                  </span>

                
                  <div>
                  <button 
                   type="button" 
                   onClick={() => deleteBuyandSellItem(items.id)} 
                   className="btn btn-primary">
                   Delete 
                   <i className="fa fa-trash m-1" aria-hidden="true"></i>
                  </button> 
                  </div>

                  </div>
            </li>
            </div>
           ))}
      </ul>
    </div>
  )
}
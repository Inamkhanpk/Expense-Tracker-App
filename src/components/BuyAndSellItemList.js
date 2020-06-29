
import React, { useContext } from 'react';

import { GlobalContext } from '../contextAPI/GlobalState';
import DeleteIcon from '@material-ui/icons/Delete';
export const BuyAndSellItemList = () => {
  
  const { deleteBuyandSellItem, buyandsellitems} = useContext(GlobalContext);



  return (
    <div className="rounded text-center balance  mt-5 p-2 ">
      <h3 className="text-dark"> History</h3>


      <ul className="list-group">
          {buyandsellitems.map(items => (
            <div key={items.id} className="mt-1">
            <li  className={items.amount< 0 ? 'list-group-item rounded   text-center minus ' :' list-group-item rounded  text-center plus'}>
                <div className="d-flex flex-wrap justify-content-between ">

                  <div>
                  {items.product} 
                  </div>

                  <span >
                  {items.amount} PKR
                  </span>

                

                 <span style={{color: "red"}}  
                 onClick={() => deleteBuyandSellItem(items.id)}>
                 < DeleteIcon />
                 </span>

                  </div>
            </li>
            </div>
           ))}
      </ul>
    </div>
  )
}
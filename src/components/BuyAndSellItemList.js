
import React, { useContext } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';
import DeleteIcon from '@material-ui/icons/Delete';

export const BuyAndSellItemList = () => {
  
  const { deleteBuyandSellItem, buyandsellitems} = useContext(GlobalContext);



  return (
    <div className="d-flex flex-wrap justify-content-center">
    <div className="rounded text-center mx-5 w-50 balance">
      <h3 className="text-dark"> History</h3>


      <ul className="list-group">
          {buyandsellitems.map(items => (
            <div key={items.id} className="">
            <li  className={items.amount< 0 ? 'list-group-item rounded text-center minus' :' list-group-item rounded  text-center plus'}>
                <div className="d-flex flex-wrap justify-content-between ">

                  <div >
                  {items.product} 
                  </div>

                  <div >
                  {items.amount} PKR
                  </div>

                

                 <div style={{color: "red"}}  
                 onClick={() => deleteBuyandSellItem(items.id)}>
                 < DeleteIcon />
                 </div>

                  </div>
            </li>
            </div>
           ))}
      </ul>
    </div>
    </div>
  )
}
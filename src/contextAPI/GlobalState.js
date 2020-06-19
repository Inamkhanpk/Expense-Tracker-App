import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';


const iState = {
  buyandsellitems: []
}


export const GlobalContext = createContext(iState);


export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, iState);

  
  function deleteBuyandSellItem(id) {
    dispatch({
      type: 'BUY_AND_SELL_ITEM_DELETE',
      payload: id
    });
  }

  function addBuyandSellItem(transaction) {
    dispatch({
      type: 'BUY_AND_SELL_ITEM_ADD',
      payload: transaction
    });
  }

  return (
  <GlobalContext.Provider 

  value={{
    buyandsellitems: state.buyandsellitems,
    deleteBuyandSellItem,
    addBuyandSellItem
  }}>

    {children}

  </GlobalContext.Provider>);
}
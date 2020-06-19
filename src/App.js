import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeAndExpense } from './components/IncomeAndExpense';
import  { Footer } from './components/Footer'
import { GlobalProvider } from './contextAPI/GlobalState';
import { BuyAndSellItemList } from './components/BuyAndSellItemList';
import { AddBuyandSellItems } from './components/AddBuyandSellItems';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <GlobalProvider>
      <Header/>
    <div className="container-fluid bg-info p-5">
     
     <Balance/>
     <IncomeAndExpense/>
     <BuyAndSellItemList/>
     <AddBuyandSellItems/>
     
    </div>
    <Footer/>
    </GlobalProvider>
  );
}

export default App;

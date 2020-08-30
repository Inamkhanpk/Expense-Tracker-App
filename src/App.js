
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeAndExpense } from './components/IncomeAndExpense';
// import  { Footer } from './components/Footer'
import { GlobalProvider } from './contextAPI/GlobalState';
import { BuyAndSellItemList } from './components/BuyAndSellItemList';
import { AddBuyandSellItems } from './components/AddBuyandSellItems';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


function App() {
  return (
    <GlobalProvider>
      <Header/>
    <div >
     <Balance/>
     <IncomeAndExpense/>
     <BuyAndSellItemList/>
     <AddBuyandSellItems/>
     </div>
    {/* <Footer/> */}
    
    </GlobalProvider>
  );
}
export default App;
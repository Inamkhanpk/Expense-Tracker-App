<<<<<<< HEAD
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
=======
import React ,{Suspense,useState} from 'react';
import Header from './components/Header/Header'
import CovidCard from './components/CovidCard/CovidCard'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'
import Footer from './components/Footer/Footer'
import Info from './components/Info/Info'
import Map from './components/Map/Map'
import createResource from "./API/api.js";
import {fetchData} from './API/api.js'
import './App.css'

function App (){
  const [country, setCountry] = useState();
  const fetchedData = createResource(country);
  
  const handleCountryChange = async (country) => {
     await fetchData(country);
    setCountry(await country);
  };

  
  
 
  return (
    <div >
     <Suspense  fallback={<h1>Loading...</h1>}>
     
     <Header/>
     <Info/>
     <CountryPicker data={fetchedData} handleCountryChange={handleCountryChange}/>
     <CovidCard data={fetchedData} />
     
     <Chart data={fetchedData} country={country} />
     
     <Map data={fetchedData}/>
     <Footer/>
     </Suspense>
    </div>
  );


>>>>>>> 99182bdc55f0c71247860f3142ce87cd373a079c
}

export default App;

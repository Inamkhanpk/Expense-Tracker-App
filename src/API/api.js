// import axios from 'axios'

// export const fetchWholeData = (country) =>{
//     const userPromise = fetchData(country)
//     const countryPromise = fetchCountries(country)
//     const dailyPromise = fetchDailyData()
//     // const datacountryPromise = fetchDataCountries(country)
//     const mapdatacountryPromise = fetchMapDataCountries(country)
//     return{
//         users:wrapPromise(userPromise),
//         country:wrapPromise(countryPromise),
//         daily:wrapPromise(dailyPromise),
//         // datacountry:wrapPromise(datacountryPromise),
//         mapdatacountry:wrapPromise(mapdatacountryPromise)
//     }
// }



//  const wrapPromise=(promise) =>{
//     let status = "loading"
//     let result
//     let suspender = promise.then(
//       data => {
//         status = "success"
//         result = data
//       },
//       error => {
//         status = "error"
//         result = error
//       }
//     )
  
//     return {
//       read() {
//         if (status === "loading") {
//           throw suspender
//         } else if (status === "error") {
//           throw result
//         } else if (status === "success") {
//           return result
//         }
//       }
//     }
//   }


  // const fetchWholeData = async (url) =>{  
  //   try {
  //     const data = await axios.get(url);
  //      console.log(data)
  //     return data;
  //   } catch (error) {
  //     return error;
  //   }
  // }



//  const fetchData = async () => {
   
//     try {
//       const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get('https://covid19.mathdro.id/api');
      
//       return { confirmed, recovered, deaths, lastUpdate };
//     } catch (error) {
//       return error;
//     }
//   };


//   const url = "https://covid19.mathdro.id/api";

// const fetchData = async (country) => {
//   let changeableUrl = url;
//   if(country){
//     changeableUrl = `${url}/countries/${country}`
//   }
//   try {
//     const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);
//     return { confirmed, recovered, deaths, lastUpdate };
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };


// const fetchCountries = async () => {
//   try {
//     const {data:{countries}} = await axios.get(`${url}/countries`)
//     return countries.map((country)=>country.name)
//   } catch (error) {
//     return error
//   }
// }
  


//    const fetchDailyData = async () => {
//     try {
//       const  data = await axios.get(`${url}/daily`);
       
//       return data
//     } catch (error) {
//       return error;
//     }
//   };


  


//   const fetchMapDataCountries = async () => {
//     try {
//       const data = await axios.get(`https://corona.lmao.ninja/v2/countries`);
//       console.log(data)
//       return data
//     } catch (error) {
//       return error;
//     }
//   };








  import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if(country){
    changeableUrl = `${url}/countries/${country}`
  }
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    
    return modifiedData;
  } catch (error) {
    return error;
  }
};

const fetchCountries = async () => {
  try {
    const {data:{countries}} = await axios.get(`${url}/countries`)
    return countries.map((country)=>country.name)
  } catch (error) {
    return error
  }
}


export const fetchMapDataCountries = async () => {
  try {
    const data = await axios.get(`https://corona.lmao.ninja/v2/countries`);
    console.log(data)
    return data
  } catch (error) {
    return error;
  }
};

const wrapPromise = (promise) => {
  let status = "loading";
  let result;
  let suspender = promise.then(
    (data) => {
      status = "success";
      result = data;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "loading") {
        throw suspender;
      } else if (status === "success") {
        return result;
      } else if (status === "error") {
        return result;
      }
    },
  };
};

const createResource = (country) => {
  return {
    users: wrapPromise(fetchData(country)),
    daily: wrapPromise(fetchDailyData(country)),
    countries: wrapPromise(fetchCountries(country)),
    mapdatacountry: wrapPromise(fetchMapDataCountries (country)),
  };
};

export default createResource;
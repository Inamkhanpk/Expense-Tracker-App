import React from 'react';
import {Bar,Line} from 'react-chartjs-2'
import { makeStyles } from '@material-ui/core/styles';







const useStyles = makeStyles(() => ({
  pad:{
    
    padding:'30%'
  }
}));
const Chart = ({ data, country }) => {
  const classes = useStyles();

console.log(data)
  const dailydata = data.daily.read();
  const { confirmed, recovered, deaths } = data.users.read();

const lineChart = (
  dailydata[0] ? (
    <Line
      data={{
        labels: dailydata.map(( value) => value.date),
        datasets: [{
          data: dailydata.map((value) => value.confirmed),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true,
        }, {
          data: dailydata.map((value) => value.deaths),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true,
        },
        ],
      }}
    />
    ) : null
);


console.log(dailydata)

console.log(country)


const barChart = (
  confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null
);



    
    

  
  

  return (
    <div className="container">
        
       {country ?  barChart : lineChart}
        
    </div>
  );
};

export default Chart;

import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
  tfield:{
    
    width:"30%",
    
  }
}));

const Countries = ({ data, handleCountryChange }) => {
  const classes = useStyles();
  const countriesList = data.countries.read();




    return(

        <div>
            <h1 className="text-center">Search Country</h1>
            
            <div className="d-flex justify-content-center p-5">
      <FormControl  className={classes.tfield}>
        <InputLabel id="demo-customized-select-label">Global</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={(e)=>handleCountryChange(e.target.value)}
          
          defaultValue="Select"
        >
{countriesList.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
       
         
        </Select>
      </FormControl>
      </div>


     
        </div>
    )
}

export default Countries

import React from 'react'
import Grid from '@material-ui/core/Grid'
import First from './../../images/firstgif.gif'
import Second from './../../images/wear-mask.gif'
import Third from './../../images/hand-sanitizer.gif'
import Fourth from './../../images/stay-inside-and-stay-safe.gif'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'



const useStyles = makeStyles((theme) => ({
    mainimg:{
      width:'80%',
      padding:'3px'
    
    },
    pad:{
  
      padding:'3%'
      
    },
    cardc:{
      height:100,
      
    }
    ,
    media:{
      padding:'3%',
      width:'25%',
      
    },
    paperc:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      margin:'5px'
    },
    confirmed: {
      borderBottom: '5px solid rgba(255, 115, 0, 0.5)',
       '&:hover':{
        boxShadow: '2px 2px 10px rgba(255, 115, 0, 0.5)'
       },
      
  },
  recovered:{
    borderBottom: '5px solid rgba(0, 255, 0, 0.5)',
    '&:hover':{
    boxShadow: '2px 2px 10px rgba(0, 255, 0, 0.5)' 
    }
  },
  death:{
    borderBottom: '5px solid rgba(255, 0, 0, 0.5)',
    '&:hover':{
    boxShadow: '2px 2px 10px rgba(255, 0, 0, 0.5)'
    }
  }
  
  
  }));
const  Info = () => {
    const classes = useStyles();

    return(
        <Grid container>
        <Grid item sm={12} md={6} lg={6}>
        <Grid container justify="center">
        <img src={First} alt="" className={classes.mainimg}/>
        </Grid>
      </Grid>
  
     <Grid item  sm={12} md={6} lg={6}>
     <Grid container justify="center">
      <h1>Covid Information</h1>
      <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
<p>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
<p>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</p>
<p>You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth</p>
</Grid>
      </Grid>



      <Grid item  sm={12} md={12} lg={12}>
          <Grid container justify="center">
         <h1>Precautinary Measure</h1>
         </Grid>
        </Grid>


<Grid item sm={12} md={12} lg={4}>
<Paper className={classes.paperc}>
<img
className={classes.media}
src={Second}
title="Paella dish"/>
<h5>Face Mask</h5>
</Paper>
</Grid>

<Grid item sm={12} md={12} lg={4}>
<Paper className={classes.paperc} >
<img
className={classes.media}
src={Third}
title="Paella dish"/>
<h5>Hand Wash</h5>
</Paper>
</Grid>

<Grid item sm={12} md={12} lg={4}>
  
<Paper className={classes.paperc} >
<img
className={classes.media}
src={Fourth}
title="Paella dish"/>
<h5>Social Distancing</h5>
</Paper>
</Grid>
</Grid>
    )
}

export default Info
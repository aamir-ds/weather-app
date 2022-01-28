import React from 'react';
import Typography from '@mui/material/Typography';
import './WeatherData.css'


function WeatherData(props) {
  return <div className='weather'>
      <Typography variant="subtitle1" gutterBottom component="div">
      {props.name}
    </Typography>
    <Typography  variant="h3" gutterBottom component="div">
    {props.temp} C
    </Typography>
  </div>;
}

export default WeatherData;

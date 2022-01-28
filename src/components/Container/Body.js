import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import CityList from '../City listing/CityList';
import Error from '../Data dispaly/Error';
import WeatherData from '../Data dispaly/WeatherData';
import Input from '../Input/Input';
import './Body.css';

function Body() {

  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [cities, setCities] = useState([]);

  const handleChange =(e)=>{
    setName(e.target.value);
  }

  const handleName =()=>{
    if(name){setCities(prev =>{
      return [...prev, name]
    } )}
    setName('')
  }


  useEffect(() => {
    if(city){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_KEY}`)
      .then(response => response.json())
      .then(data =>{setWeatherData(data)})
    }
   
  }, [city]);
  
  const handleCity =(ele)=>{
    setCity(ele);
  }

  const handleDelete =(id)=>{
    setCities(prev =>{
      return prev.filter(
        (item, index)=>{
          return index !== id;
        }
      )
    } )
  }


  return( 
  <div className='body'>
      <Input 
      onChange={handleChange} 
      value={name} 
      onClick={handleName} />
    {cities.map((ele, i)=>
        <CityList name={ele} 
            key={i}
            clickCity={()=> handleCity(ele)}
            delete={()=> handleDelete(i)}
        />
    )} 

    {typeof weatherData.main === 'undefined' ?
    <>
        {cities.length === 0 && 
            <Typography variant="h6" gutterBottom component="div" style={{marginTop:'15%'}}>
            Welcome to weather app
            </Typography>
        }
    </>
    : 
      <WeatherData name={weatherData.name} temp={weatherData.main.temp}/>
    }
    {(cities.length > 0) && weatherData.cod === '404'? <Error/>:<></>}

  </div>)
}

export default Body;

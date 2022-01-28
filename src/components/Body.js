import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import CityList from './CityList';
import Input from './Input';
import Error from './Error';
import WeatherData from './WeatherData';
import './Body.css'

function Body() {


  const apiKey = 'ee912718a09177137817d83ba0c7d376'
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('');

  const [name, setName] = useState('');
  const [newArr, setNewArr] = useState([]);


  const handleChange =(e)=>{
    setName(e.target.value);
  }

  const handleName =()=>{
    if(name){setNewArr(prev =>{
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
    setNewArr(prev =>{
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
        {newArr.map((ele, i)=>
            <CityList name={ele} 
                key={i}
                clickCity={()=> handleCity(ele)}
                delete={()=> handleDelete(i)}
            />
        )} 

    {typeof weatherData.main === 'undefined' ?
    <>
        {newArr.length === 0 && 
            <Typography variant="h6" gutterBottom component="div">
            Welcome to weather app
            </Typography>
        }
    </>
    : (
      <WeatherData name={weatherData.name} temp={weatherData.main.temp}/>
    )
    }
    { weatherData.cod === '404'? 
    <Error/>
    : 
    <></>
    }

  </div>)
}

export default Body;

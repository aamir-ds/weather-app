import React from 'react';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import './Input.css'

function Input(props) {
  return <div className='input'>
      <TextField id="outlined-basic" label="enter city name" variant="outlined" onChange={props.onChange} value={props.value} style={{marginRight:'20px'}}/>
       <Fab onClick={props.onClick} size="medium" color="secondary" aria-label="add">
        <AddIcon  />
      </Fab>
  </div>;
}

export default Input;

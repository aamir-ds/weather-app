import { useEffect, useState } from 'react';
import './App.css';
// import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Typography from '@mui/material/Typography';
import Body from './components/Body';








function App() {

  return (
    
    <div className="App">
      <Typography variant="h3" gutterBottom component="div">
         Weather app
      </Typography>
      <Body/>
    </div>
  );
}

export default App;

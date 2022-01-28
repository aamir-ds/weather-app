import React from 'react';
import Typography from '@mui/material/Typography';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './CityList.css'


function CityList(props) {

  return <div className='city-list' key={props.key}>
          <Typography onClick={props.clickCity} variant="h6" gutterBottom component="div">
              {props.name}
          </Typography>
          <DeleteOutlinedIcon onClick={props.delete} />   
</div>;
}

export default CityList;

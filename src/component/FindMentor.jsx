// src/FindMentor.js

import React from 'react';
// import { IconButton } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import './FindMentor.css';

const FindMentor = () => {
  return (
    <div className="find-mentor-container">
      <h1>Find Mentor</h1>
      {/* <IconButton> */}
        <GridViewIcon  id="grid"/>
      {/* </IconButton> */}
    </div>
  );
};

export default FindMentor;

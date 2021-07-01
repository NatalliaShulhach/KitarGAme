import React from "react";
import './App.css';
import Spinner from './components/loader/loader';
import CreateCanvas from './components/game_field/canvas';
import Grid from '@material-ui/core/Grid';
import Inventory from './components/inventory/inventory';
import TextField from './components/text_field/textField';
import { useState } from 'react';

function App() {
  const [isShowCanvas, setIsShowCanvas] = useState(false);
  setTimeout(() => setIsShowCanvas(true), 2000);
  return (
    <React.Fragment>
      <div className="background-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="main">
        {!isShowCanvas && <Spinner timeout={2000} />}
        <Grid container spacing={3}>
          <Grid item xs={7}>
            {isShowCanvas && <CreateCanvas />}
          </Grid>
          <Grid item xs={3}>
            {isShowCanvas && <Inventory />}
          </Grid>
          <Grid item xs={10}>
            {isShowCanvas && <TextField />}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;

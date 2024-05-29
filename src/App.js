import React from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../src/components/Header/Header.jsx'
import List from '../src/components/List/List.jsx'
import Map from '../src/components/Map/Map.jsx'
import PlaceDetails from '../src/components/PlaceDetails/PlaceDetails.jsx'


const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item sx={12} md={4}>
          <List />
        </Grid>
        <Grid item sx={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  )
}

export default App;
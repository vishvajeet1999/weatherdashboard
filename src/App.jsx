import { useState } from 'react'
import Navbar from './components/nav/Navbar.jsx';
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay.jsx';
import OutfitRecommendation from './components/outfitRecommendation/OutfitRecommendation.jsx';
import { Grid } from '@mui/material';
import SearchHistoy from './components/searchHistory/SearchHistoy.jsx';
import { Provider } from 'react-redux';
import { store } from './store/index.js';


function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid size={{
          xs: 12, md: 8, border: '1px solid red'
        }}>
          <WeatherDisplay />
        </Grid>
        <Grid size={{ xs: 12, md: 4, }}>
          <OutfitRecommendation />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <SearchHistoy />
        </Grid>

      </Grid>
    </Provider>
  )
}

export default App

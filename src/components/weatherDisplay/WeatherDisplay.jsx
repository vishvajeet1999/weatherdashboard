import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import { useSelector } from 'react-redux';

const weatherData = {
  city: 'Delhi',
  temperature: '28°C',
  condition: 'Sunny', // Possible values: 'Sunny', 'Cloudy', 'Rainy'
  windSpeed: '12 km/h',
  humidity: '65%',
};

function getConditionIcon(condition) {
  switch (condition) {
    case 'Sunny':
      return <WbSunnyIcon color="warning" fontSize="large" />;
    case 'Cloudy':
      return <CloudIcon color="action" fontSize="large" />;
    case 'Rainy':
      return <UmbrellaIcon color="primary" fontSize="large" />;
    default:
      return null;
  }
}

function WeatherDisplay() {
  const weather = useSelector(state => state.weather)
  console.log('Weather data from Redux:', weather);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Current Weather Details
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {weatherData.city}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            {getConditionIcon(weatherData.condition)}
          </Grid>
          <Grid item xs>
            <Typography variant="h4">{weatherData.temperature}</Typography>
            <Typography variant="subtitle1">{weatherData.condition}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="body1">Wind Speed</Typography>
            <Typography variant="body2">{weatherData.windSpeed}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Humidity</Typography>
            <Typography variant="body2">{weatherData.humidity}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WeatherDisplay;
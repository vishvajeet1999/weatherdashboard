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
      return <WbSunnyIcon color="warning" fontSize="large" />;
  }
}

function WeatherDisplay() {
  const { currentWeather } = useSelector(state => state.weather);
  if (!currentWeather) {
    return <Card sx={{ minWidth: 200,height: "100%"}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Weather details
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, }}
        >
          Please enter a location to get the weather details.
        </Typography>
      </CardContent>
    </Card>
  }
  return (
    <Card sx={{ minWidth: 275, height: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Weather Details
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {currentWeather.location.name}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            {getConditionIcon(currentWeather.current.condition.text)}
          </Grid>
          <Grid item xs>
            <Typography variant="h4">{currentWeather.current.temp_c}°C</Typography>
            <Typography variant="subtitle1">{currentWeather.current.condition.text}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="body1">Wind Speed</Typography>
            <Typography variant="body2">{currentWeather.current.wind_kph}km/h</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Humidity</Typography>
            <Typography variant="body2">{currentWeather.current.humidity}%</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WeatherDisplay;
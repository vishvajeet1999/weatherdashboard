import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';

// Example weather condition, you can pass this as a prop for dynamic data
const weatherCondition = 'Sunny'; // 'Sunny', 'Cloudy', 'Rainy', 'Cold'

function getRecommendation(condition) {
  switch (condition) {
    case 'Sunny':
      return {
        text: 'Sunglasses suggested',
        icon: <WbSunnyIcon color="warning" fontSize="large" />
      };
    case 'Cloudy':
      return {
        text: 'Light jacket recommended',
        icon: <CloudIcon color="action" fontSize="large" />
      };
    case 'Rainy':
      return {
        text: 'Take an umbrella',
        icon: <UmbrellaIcon color="primary" fontSize="large" />
      };
    case 'Cold':
      return {
        text: 'Wear a jacket',
        icon: <AcUnitIcon color="info" fontSize="large" />
      };
    default:
      return {
        text: 'Check the weather for recommendations',
        icon: null
      };
  }
}

function OutfitRecommendation() {
  const recommendation = getRecommendation(weatherCondition);

  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Outfit Recommendation
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          {recommendation.icon}
          <Typography variant="h6">{recommendation.text}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
export default OutfitRecommendation;
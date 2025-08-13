import React from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';

function SearchHistoy() {
  const { weatherSeachHistory } = useSelector(state => state.weather);
   console.log(weatherSeachHistory, 'Weather Search History');
  return (
    <Card sx={{ minWidth: 275, mt: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Last 5 Weather Searches
        </Typography>
        {!weatherSeachHistory && <Typography
          variant="body2"
          color="text.secondary"
        >
          There is no historical weather search available.
        </Typography>}
        {weatherSeachHistory && <List>
          {weatherSeachHistory.map((item, idx) => (
            <ListItem key={idx} divider>
              <ListItemText
                primary={`${item.location.name} - ${item.current.condition.text}`}
                secondary={`Temperature: ${item.current.temp_c}°C, Wind: ${item.current.wind_kph} km/h, Humidity: ${item.current.humidity}%`}
              />
            </ListItem>
          ))}
        </List>}
      </CardContent>
    </Card>
  );
}

export default SearchHistoy;
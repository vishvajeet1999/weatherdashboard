import React from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

// Example search history data
const searchHistory = [
  { city: 'Delhi', condition: 'Sunny', temperature: '32°C' },
  { city: 'Mumbai', condition: 'Rainy', temperature: '27°C' },
  { city: 'Bangalore', condition: 'Cloudy', temperature: '25°C' },
  { city: 'Chennai', condition: 'Sunny', temperature: '34°C' },
  { city: 'Kolkata', condition: 'Rainy', temperature: '28°C' },
];

function SearchHistoy() {
  return (
    <Card sx={{ minWidth: 275, mt: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Last 5 Weather Searches
        </Typography>
        <List>
          {searchHistory.map((item, idx) => (
            <ListItem key={idx} divider>
              <ListItemText
                primary={`${item.city} - ${item.condition}`}
                secondary={`Temperature: ${item.temperature}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default SearchHistoy;
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    TextField,
    Button,
    Box,
    CircularProgress
} from '@mui/material';
import { WbSunny as WeatherIcon } from '@mui/icons-material';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentWeather, updateHistory } from '../../store/weather';

export default function SimpleWeatherNavbar({handleOpen}) {
    const [searchQuery, setSearchQuery] = useState('');
    const { weatherSeachHistory } = useSelector(state => state.weather);
    const dispatch = useDispatch();
    const [spinner, setSpinner] = useState(false);

    const handleSearch = async () => {
        try {
            setSpinner(true)
            const query = searchQuery.trim();
            if (query) {
                const weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`)
                const weatherFinalData = weatherData.data;
                dispatch(updateCurrentWeather({ value: weatherFinalData }));
                if (weatherSeachHistory) {
                    const cityName = weatherFinalData.location.name;
                    const alreadyExistsData = weatherSeachHistory.find(data => data.location.name === cityName)
                    if (alreadyExistsData) {
                        //update the data
                        const newHistory = weatherSeachHistory.map(weatheHistory => {
                            if (weatheHistory.location.name === cityName) return weatherFinalData
                            return weatheHistory
                        })
                        dispatch(updateHistory({ value: newHistory }));
                    } else {

                        if ([...weatherSeachHistory, weatherData.data].length > 5) {
                            const finalHistory = [weatherData.data, ...weatherSeachHistory].slice(0, 5)
                            dispatch(updateHistory({ value: finalHistory }));

                        } else {
                            dispatch(updateHistory({ value: [weatherFinalData, ...weatherSeachHistory] }));
                        }

                    }

                } else {
                    dispatch(updateHistory({ value: [weatherFinalData] }));
                }

            }
            setSpinner(false)
        } catch (error) {
            setSpinner(false)
            handleOpen();
            console.log(error, 'Error')
        }
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <AppBar
            position="static"
            sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
        >
            <Toolbar sx={{
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                gap: { xs: 2, md: 0 },
                py: { xs: 1.5, md: 1 }
            }}>
                {/* Logo */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: { xs: 1, md: 0 },
                    width: { xs: '100%', md: 'auto' }
                }}>
                    <WeatherIcon sx={{ mr: 1, fontSize: 28 }} />
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1.1rem', md: '1.25rem' }
                        }}
                    >
                        Weather App
                    </Typography>
                </Box>

                {/* Spacer for desktop */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} />

                {/* Search */}
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center',
                    width: { xs: '100%', md: 'auto' },
                    flexDirection: { xs: 'column', sm: 'row' }
                }}>
                    <TextField
                        size="small"
                        placeholder="Enter location"
                        value={searchQuery}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: 2,
                            width: { xs: '100%', sm: '250px', md: '300px' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    border: 'none',
                                },
                            },
                            '& .MuiInputBase-input': {
                                fontSize: '0.95rem',
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSearch}
                        disabled={!searchQuery.trim() || spinner}
                        sx={{
                            backgroundColor: '#ff6b6b',
                            color: 'white',
                            fontWeight: 600,
                            px: 3,
                            py: 1,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '0.95rem',
                            width: { xs: '100%', sm: 'auto' },
                            boxShadow: '0 3px 12px rgba(255, 107, 107, 0.3)',
                            '&:hover': {
                                backgroundColor: '#ff5252',
                                boxShadow: '0 5px 15px rgba(255, 107, 107, 0.4)',
                                transform: 'translateY(-1px)',
                            },
                            '&:disabled': {
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                color: 'rgba(255, 255, 255, 0.7)',
                            },
                            transition: 'all 0.2s ease-in-out'
                        }}
                    >
                        Get Weather
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
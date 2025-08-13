import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentWeather: null,
    weatherSeachHistory: null,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        updateHistory: (state, action) => {
            state.weatherSeachHistory = action.payload.value
        },
        updateCurrentWeather: (state, action) => {
            state.currentWeather = action.payload.value
        },
        resetWeather: (state) => {
            state = initialState
        }

    },

});

export const { updateHistory, updateCurrentWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
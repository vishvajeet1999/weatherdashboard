import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentCityData: null,
    history: null,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addToHistory: (state, action) => {
            state.history = action.payload.value
        },
        addCurrentCityData: (state, action) => {
            state.currentCityData = action.payload.value
        },

        resetWeather: (state) => {
            state = initialState
        }

    },

});

export const { addToHistory, addCurrentCityData } = weatherSlice.actions;
export default weatherSlice.reducer;
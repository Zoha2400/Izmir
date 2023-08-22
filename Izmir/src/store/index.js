import {configureStore} from '@reduxjs/toolkit';
import izmirReducer from './dataIzmirSlice';
import dataFetchSlice from './dataFetchSlice';

export default configureStore({
    reducer: {
        data: izmirReducer,
        dataFetch: dataFetchSlice
    }
})
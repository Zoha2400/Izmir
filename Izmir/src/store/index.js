import {configureStore} from '@reduxjs/toolkit';
import izmirReducer from './dataIzmirSlice';

export default configureStore({
    reducer: {
        data: izmirReducer
    }
})
import {configureStore} from '@reduxjs/toolkit';
import izmirReducer from './izmirSlice';

export default configureStore({
    reducer: {
        data: izmirReducer
    }
})
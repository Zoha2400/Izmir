import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Создайте асинхронное действие для выполнения GET-запроса
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('http://89.38.131.46:1808/get_all_data/');
  return response.data;
});

// Создайте слайс
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {} = dataSlice.actions;



export default dataSlice.reducer;

// Экспортируйте асинхронное действие
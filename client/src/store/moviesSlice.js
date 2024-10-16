import { createSlice } from '@reduxjs/toolkit';
import { decorateAsyncThunk, pendingReducer, rejectedReducer } from './helpers';
import { getAllMovies } from '../api';

export const getMovies = decorateAsyncThunk({
    type: 'movies/getMovies',
    asyncThunk: getAllMovies,
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        error: null,
        isPending: false,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, pendingReducer);
        builder.addCase(getMovies.rejected, rejectedReducer);
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.isPending = false;
            state.error = null;
            state.movies = action.payload;
        });
    }
});

export default moviesSlice.reducer;

//https://www.youtube.com/watch?v=DWHv-EfiHtE&list=PLxQIdU5bMkOiUg3p6X4BXVpIfWzMaLV7l&index=27
// 23:10
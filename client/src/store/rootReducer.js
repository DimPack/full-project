import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countSlice';
import todoReducer from './todoSlice';
import usersReducer from './usersSlice';
import tasksReducer from './tasksSlice';
import moviesReducer from './moviesSlice';

const rootReducer = combineReducers({
  count: countReducer,
  todo: todoReducer,
  users: usersReducer,
  tasks: tasksReducer,
  movies: moviesReducer,
});

export default rootReducer;

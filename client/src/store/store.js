import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users.slice';

const rootReducer = combineReducers({
  users: usersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
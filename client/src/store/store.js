import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users.slice';
import roomsReducer from './rooms.slice';

const rootReducer = combineReducers({
  users: usersReducer,
  rooms: roomsReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}

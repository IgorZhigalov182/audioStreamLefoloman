import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  users: usersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

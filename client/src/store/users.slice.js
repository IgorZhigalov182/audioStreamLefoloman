import { createAction, createSlice } from '@reduxjs/toolkit';
import { register as registerApi, login as loginApi } from '../utils/api';

const initialState = {
  entities: null,
  isLoading: false,
  error: null,
  auth: null,
  isLoggedIn: false,
  dataLoaded: false
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true;
    },
    usersReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    userUpdateSuccess: (state, action) => {
      const userIndex = state.entities.findIndex((user) => user.id === action.payload.id);
      state.entities[userIndex] = action.payload;
    },
    authRequested: (state) => {
      state.error = null;
    }
  }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  usersRequested,
  usersReceived,
  usersRequestFailed,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  userUpdateSuccess
} = actions;

const authRequested = createAction('users/authRequested');
const userUpdateRequested = createAction('user/userUpdateRequested');
const userUpdateFailed = createAction('user/userUpdateFailed');

export const login =
  ({ login, pass, redirect }) =>
  async (dispatch) => {
    try {
      const res = await loginApi(login, pass);
    } catch (error) {
      console.log(error);
    }

    dispatch(authRequestSuccess({ userId: '412438909358731' }));
  };

export const signUp =
  ({ login, pass }) =>
  async (dispatch) => {
    try {
      const res = registerApi(login, pass);
    } catch (error) {
      console.log(error);
    }
    dispatch(authRequestSuccess({ userId: '412438909358731' }));
  };

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export default usersReducer;

import { createAction, createSlice } from '@reduxjs/toolkit';
import { register as registerApi, login as loginApi} from '../utils/api';

const initialState = {
  entities: null,
  isLoading: false,
  error: null,
  auth: null,
  isLoggedIn: false,
  dataLoaded: false,
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
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  usersRequested,
  usersReceived,
  usersRequestFailed,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  userUpdateSuccess,
} = actions;

const authRequested = createAction('users/authRequested');
const userUpdateRequested = createAction('user/userUpdateRequested');
const userUpdateFailed = createAction('user/userUpdateFailed');

export const login =
  ({login, pass, redirect}) =>
  async (dispatch) => {
    //dispatch(authRequested());
    loginApi(login, pass);
    dispatch(authRequestSuccess({ userId: '123456'}));
    // try {
    //   const data = await authService.login({ email, password });
    //   dispatch(authRequestSuccess({ userId: data.userId }));
    //   localStorageService.setTokens(data);
    // } catch (error) {
    //   const { code, message } = error?.response?.data?.error;
    //   if (code === 400) {
    //     const errorMessage = '400 error';
    //     dispatch(authRequestFailed(error.message));
    //   } else {
    //     dispatch(authRequestFailed(error.message));
    //   }
    // }
  };

// export const signUp = (payload) => async (dispatch) => {
//   dispatch(authRequested());
//   try {
//     const data = await authService.register(payload);
//     localStorageService.setTokens(data);
//     dispatch(authRequestSuccess({ userId: data.userId }));
//   } catch (error) {
//     dispatch(authRequestFailed(error.message));
//   }
// };

// export const logOut = () => (dispatch) => {
//   localStorageService.removeAuthData();
//   dispatch(userLoggedOut());
// };

// export const updateUserData = (payload) => async (dispatch) => {
//   dispatch(userUpdateRequested());
//   try {
//     const { content } = await userService.updateUser(payload);
//     dispatch(userUpdateSuccess(content));
//   } catch (error) {
//     dispatch(userUpdateFailed(error));
//   }
// };

// export const loadUsersList = () => async (dispatch, getState) => {
//   dispatch(usersRequested());
//   try {
//     const { content } = await userService.get();
//     dispatch(usersReceived(content));
//   } catch (error) {
//     dispatch(usersRequestFailed(error.message));
//   }
// };

// export const getUsersList = () => (state) => state.users.entities;

// export const getCurrentUserData = () => (state) => {
//   return state.users.entities
//     ? state.users.entities.find((u) => u.id === state.users.auth.userId)
//     : null;
// };

// export const loadUserById = (userId) => async (dispatch) => {
//   dispatch(usersRequested());

//   try {
//     const data = await userService.getUser(userId);
//     dispatch(usersReceived(data));
//   } catch (error) {
//     dispatch(usersRequestFailed(error.message));
//   }
// };
// export const getUser = () => (state) => state.users.entities;
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
// export const getDataStatus = () => (state) => state.users.dataLoaded;
// export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
// export const getCurrentUserId = () => (state) => state.users.auth.userId;
// export const getAuthErrors = () => (state) => state.users.error;
export default usersReducer;

import { createAction, createSlice } from '@reduxjs/toolkit';
import { getRooms } from '../utils/api';

const initialState = {
  entities: null,
  isLoading: false,
  error: null,
  auth: null,
  dataLoaded: false
};

export const usersSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    roomsRequested: (state) => {
      state.isLoading = true;
    },
    roomsReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    roomsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: roomsReducer, actions } = usersSlice;
const { roomsRequested, roomsReceived, roomsRequestFailed } = actions;

export const loadRoomsList = () => async (dispatch, getState) => {
  dispatch(roomsRequested());
  try {
    const res = await getRooms();
    console.log(res);
    // const { content } = await userService.get();
    dispatch(roomsReceived(content));
  } catch (error) {
    dispatch(roomsRequestFailed(error.message));
  }
};

export const getRoomsList = () => (state) => state.rooms.entities;

// export const getCurrentUserData = () => (state) => {
//   return state.users.entities
//     ? state.users.entities.find((u) => u.id === state.users.auth.userId)
//     : null;
// };

// export const loadUserById = (userId) => async (dispatch) => {
//   dispatch(usersRequested());

export default roomsReducer;

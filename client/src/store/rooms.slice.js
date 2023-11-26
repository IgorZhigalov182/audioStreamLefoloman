import { createAction, createSlice } from '@reduxjs/toolkit';
import { getRooms } from '../utils/api';
import { getMusicPreference } from '../services/localStorage.services';

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
  const res = getRooms();
  console.log(res);
  try {
    // const { content } = await userService.get();
    dispatch(roomsReceived(res));
  } catch (error) {
    dispatch(roomsRequestFailed(error.message));
  }
};

export const getRoomsList = () => (state) => state.rooms.entities;

export const getFivePrefRoom = () => (state) => {
  //   const musicPref = getMusicPreference();
  //   const fivePrefRooms = [...state.rooms.entities].filter((e) => {
  //     console.log(e);
  //   });
};

// export const loadUserById = (userId) => async (dispatch) => {
//   dispatch(usersRequested());

export default roomsReducer;

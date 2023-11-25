import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './pages/main/Main';
import Rooms from './pages/rooms/Rooms';
import Room from './pages/room/Room';
import NotFound from './pages/not-found/NotFound';
import Auth from './pages/autorization/Auth';
import RoomOutlet from './outlets/RoomOutlet';
import Preference from './pages/preference/Preference';

const routes = (isLoggedIn = true) => [
  // { path: '/', element: isLoggedIn ? <Main /> : <Navigate to="/login" /> },
  { path: '/', element: isLoggedIn ? <Main /> : <Main /> },
  { path: '/preference', element: isLoggedIn ? <Preference /> : <Navigate to="/" /> },
  {
    path: '/rooms',
    element: isLoggedIn ? <RoomOutlet /> : <Navigate to="/login" />,
    children: [
      { path: '', element: <Rooms /> },
      { path: ':roomId', element: <Room /> }
    ]
  },
  { path: '*', element: <NotFound /> },
  { path: 'login', element: !isLoggedIn ? <Auth /> : <Navigate to="/" /> }
];

export default routes;

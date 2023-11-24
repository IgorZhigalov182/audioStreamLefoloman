import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './pages/main/Main';
import Rooms from './pages/rooms/Rooms';
import Room from './pages/room/Room';
import NotFound from './pages/not-found/NotFound';

const routes = (isLoggedIn = true) => [
  { path: '/', element: isLoggedIn ? <Main /> : <Navigate to="/login" /> },
  {
    path: 'rooms',
    element: isLoggedIn ? <Rooms /> : <Navigate to="/login" />,
    children: [{ path: ':roomId', element: <Room /> }],
  },
  { path: '*', element: <NotFound /> },
  //   { path: 'login', element: <Auth /> },
];

export default routes;

import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './pages/main/Main';
import Rooms from './pages/rooms/Rooms';
import Room from './pages/room/Room';
import NotFound from './pages/not-found/NotFound';
import Auth from './pages/autorization/Auth';

const routes = (isLoggedIn) => [
  { path: '/', element: isLoggedIn ? <Main /> : <Navigate to="/login" /> },
  {
    path: 'rooms',
    element: isLoggedIn ? <Rooms /> : <Navigate to="/login" />,
    children: [{ path: ':roomId', element: <Room /> }],
  },
  { path: '*', element: <NotFound /> },
  { path: 'login', element: !isLoggedIn ? <Auth /> : <Navigate to='/' /> },
];

export default routes;

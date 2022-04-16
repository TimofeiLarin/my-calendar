import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSector';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.authReducer)
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
           key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  );
};

export default AppRouter;

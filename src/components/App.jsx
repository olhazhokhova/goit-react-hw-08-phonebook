import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Contacts from './Contacts';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { authOperations } from '../redux/auth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

  return (
    <div className="app-content">
      <Header />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<div className='start'>Для начала работы войдите в личный кабинет <br /> или зарегистрируйтесь 😉</div>} />
          <Route
            path="/register"
            element={
              <PublicRoute restricted redirectTo='/contacts'>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectTo='/contacts'>
                <LoginForm />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo='/login'>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Routes>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default App;
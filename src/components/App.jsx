import { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Contacts from './Contacts';


const App = () => {
  return (
    <div className="app-content">
      <Header />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<div className='start'>Для начала работы войдите в личный кабинет <br /> или зарегистрируйтесь 😉</div>} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default App;
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Container from '../Container';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header_wrap}>
          <NavLink to="/contacts" className={s.link}>
            Контакты
          </NavLink>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <NavLink to="/register" className={`${s.link} ${s.auto}`}>
                Зарегистрироваться
              </NavLink>
              <NavLink to="/login" className={s.link}>
                Войти
              </NavLink>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;

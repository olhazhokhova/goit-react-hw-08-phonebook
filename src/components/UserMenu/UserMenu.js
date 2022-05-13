import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Logout from './Logout';
import s from './UserMenu.module.css';
import avatar from './avatar.jpg';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  return (
    <div className={s.area}>
      <img src={avatar} alt="" width="32" className={s.ava} />
      <span className={s.email}>{email}</span>
      <Logout />
    </div>
  );
};

export default UserMenu;

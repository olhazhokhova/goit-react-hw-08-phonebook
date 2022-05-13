import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { authOperations } from '../../redux/auth';
import s from './RegisterForm.module.css';
import Container from '../Container';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Container>
      <div className={s.wrap}>
        <h1>Форма регистрации</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            label="Имя"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            size="small"
            margin="normal"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            size="small"
            margin="normal"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            label="Пароль"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            size="small"
            margin="normal"
            fullWidth
            onChange={handleChange}
          />
          <Button
            className={s.button}
            type="submit"
            variant="contained"
            margin="normal"
            fullWidth
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterForm;

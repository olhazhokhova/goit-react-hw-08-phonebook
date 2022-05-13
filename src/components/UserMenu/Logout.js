import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { authOperations } from '../../redux/auth';

const s = {
  button: {
    backgroundColor: 'rgba(56,41,41,.5)',
    fontSize: '12px',
  },
};

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <Button
      style={s.button}
      type="button"
      variant="contained"
      margin="normal"
      size="small"
      onClick={() => dispatch(authOperations.logOut())}
    >
      Выйти
    </Button>
  );
};

export default Logout;

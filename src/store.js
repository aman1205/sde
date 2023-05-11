import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './reducers/index';

const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});

export default store;

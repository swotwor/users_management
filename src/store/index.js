import { configureStore } from '@reduxjs/toolkit';
import userManagement from './usersReducer.js'

export const store = configureStore({
  reducer: {
    userManagement
  },
})
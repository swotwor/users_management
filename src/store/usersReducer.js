import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  currentPage: 'welcomePage',
  currentModalWindow: '',
  selectedUser: {},
}

export const counterSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    addNewUser: (state, action) => {
      const userState = {...action.payload, id: state.users.length + 1}
      state.users.push(userState);
    },
    editUser: (state, action) => {
      state.users = state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      })
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    openModalWindow: (state, action) => {
      state.currentModalWindow = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
})

export const { getUsers, setCurrentPage, openModalWindow, addNewUser, setSelectedUser, editUser, deleteUser } = counterSlice.actions

export default counterSlice.reducer
import ky from 'ky';
import { addNewUser, editUser, getUsers, setCurrentPage, setSelectedUser, deleteUser, openModalWindow } from '../store/usersReducer';

export const fetchUsers = async (dispatch) => {
    try {
        const res = await ky
            .get('https://jsonplaceholder.typicode.com/users')
            .json();
        dispatch(getUsers(res));
    } catch (err) {
        alert('Щось пішло не так(((')
    }
};

export const fetchNewUser = async (dispatch, newUser, lastId) => {
    try {
        const res = await ky
            .post('https://jsonplaceholder.typicode.com/users', {json: newUser})
            .json();
        dispatch(addNewUser({...res, id: lastId}));
        dispatch(openModalWindow(''));
    } catch (err) {
        alert('Щось пішло не так(((')
    }
}

export const setEditUser = async (dispatch ,modifiedUser) => {
    try {
        const res = await ky
            .patch(`https://jsonplaceholder.typicode.com/users/${modifiedUser.id}`, {json: modifiedUser})
            .json();
        dispatch(editUser(res));
        dispatch(setSelectedUser(modifiedUser));
        dispatch(openModalWindow(''));
    } catch (err) {
        alert('Щось пішло не так(((')
    }
}

export const setDeleteUser = async (dispatch, userId) => {
    try {
        await ky.delete(`https://jsonplaceholder.typicode.com/users/${userId}`).json();
        dispatch(deleteUser(userId));
        dispatch(setCurrentPage('usersPage'))
        dispatch(openModalWindow(''));
    } catch (err) {
        alert('Щось пішло не так(((')
    }
}

export const checkAllValues = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            if (!checkAllValues(obj[key])) {
                alert('Треба заповнити всі поля');
                return false;
            }
        } else {
            if (!obj[key]) {
                alert('Треба заповнити всі поля');
                return false;
            }
        }
    }
    return true;
}
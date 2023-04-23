import './UsersPage.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModalWindow, setCurrentPage, setSelectedUser } from '../../store/usersReducer';

const UsersPage = () => {
    const users = useSelector(state => state.userManagement.users);
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const [searchUsers, setSearchUsers] = useState(users);

    const searchUser = (event) => {
        setSearchInput(event.target.value);
        if (!event.target.value) {
            setSearchUsers(users);
        } else {
            setSearchUsers(users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase())));
        }
    }
    const handleClickOnAddUser = () => {
        dispatch(openModalWindow('addNewUser'));
    }
    const handlClickOnUser = (idUser) => {
        users.map(user => {
            if (user.id === idUser) {
                dispatch(setSelectedUser(user));
                dispatch(setCurrentPage('userPage'));
            }
        })
    }

    useEffect(() => {
        setSearchUsers(users);
    }, [users]);

    return (
        <div className="usersPage">
            <div className="usersPage_container">
                <div className="usersPage_header">
                    <button onClick={handleClickOnAddUser}>Add User</button>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={searchUser}
                        placeholder='Search User'
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                        </tr>
                    </thead>
                    <tbody>
                    {searchUsers.map(user => {
                        return (
                            <tr key={user.id} onClick={() => handlClickOnUser(user.id)}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default UsersPage;

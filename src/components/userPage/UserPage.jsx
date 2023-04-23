import './UserPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { openModalWindow, setCurrentPage, setSelectedUser } from '../../store/usersReducer';

const UserPage = () => {
    const dispatch = useDispatch();
    const {users, selectedUser} = useSelector(state => state.userManagement);
    const indexUser = users.findIndex(user => user.id === selectedUser.id);

    const handleClickOnEditUser = () => {
        dispatch(openModalWindow('editUser'));
    }
    const handleClickOnPrevButton = () => {
        if (users[indexUser - 1]) {
            dispatch(setSelectedUser(users[indexUser - 1]))
        }
    }
    const handleClickOnNextButton = () => {
        if (users[indexUser + 1]) {
            dispatch(setSelectedUser(users[indexUser + 1]))
        }
    }
    const handleClickOnCancelButton = () => {
        dispatch(setCurrentPage('usersPage'));
    }
    const handleClickOnDeleteButton = () => {
        dispatch(openModalWindow('deleteUser'))
    }

    return (
        <div className="userPage">
            <div className="userPage_container">
                <div className="userPage_title">
                    <button onClick={handleClickOnPrevButton}>Prev</button>
                    <p>{selectedUser.name} <span>({indexUser + 1}/{users.length})</span></p>
                    <button onClick={handleClickOnNextButton}>Next</button>
                </div>
                <div className="userPage_items">
                    <p>Name - <span>{selectedUser.name}</span></p>
                    <p>Username - <span>{selectedUser.username}</span></p>
                    <p>Email - <span>{selectedUser.email}</span></p>
                    <p>Street - <span>{selectedUser.address.street}</span></p>
                    <p>Suite - <span>{selectedUser.address.suite}</span></p>
                    <p>City - <span>{selectedUser.address.city}</span></p>
                    <p>Zip code - <span>{selectedUser.address.zipcode}</span></p>
                    <p>Phone - <span>{selectedUser.phone}</span></p>
                    <p>Website - <span>{selectedUser.website}</span></p>
                    <p>Company name - <span>{selectedUser.company.name}</span></p>
                    <p>Company catchPhrase - <span>{selectedUser.company.catchPhrase}</span></p>
                    <p>Company bs - <span>{selectedUser.company.bs}</span></p>
                </div>
                <div className="userPage_buttons">
                    <button className='userPage_buttonCancel' onClick={handleClickOnCancelButton}>Cancel</button>
                    <button className='userPage_buttonEdit' onClick={handleClickOnEditUser}>
                        Edit
                    </button>
                    <button className='userPage_buttonDel' onClick={handleClickOnDeleteButton}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UserPage;

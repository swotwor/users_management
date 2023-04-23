import './DeleteUserStyles.scss';
import { setDeleteUser } from '../../../../logic/logic';
import { openModalWindow } from '../../../../store/usersReducer';
import { useDispatch, useSelector } from 'react-redux';

const DeleteUser = () => {
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(state => state.userManagement);

    const handleClickOnCancelButton = () => {
        dispatch(openModalWindow(''));
    }
    const handleClickOnDeleteButton = () => {
        setDeleteUser(dispatch, selectedUser.id);
    }

    return (
        <div className='deleteUser' onClick={e => e.stopPropagation()}>
            <div className="deleteUser_title">Delete {selectedUser.name}?</div>
            <div className="deleteUser_buttonContainer">
                <button className='deleteUser_buttonCancel' onClick={handleClickOnCancelButton}>Cancel</button>
                <button className='deleteUser_buttonDelete' onClick={handleClickOnDeleteButton}>Delete</button>
            </div>
        </div>
    );
};

export default DeleteUser;
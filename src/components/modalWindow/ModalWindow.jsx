import './ModalWindowStyles.scss';
import UserEdit from './components/userEdit/UserEdit';
import AddNewUser from './components/addNewUser/AddNewUser';
import DeleteUser from './components/deleteUser/DeleteUser';
import { openModalWindow } from '../../store/usersReducer';
import { useDispatch, useSelector } from 'react-redux';

const ModalWindow = () => {
    const dispatch = useDispatch();
    const currentModalWindow = useSelector(state => state.userManagement.currentModalWindow)

    return (
        <div onClick={() => dispatch(openModalWindow(''))} className="modalWindow">
            {currentModalWindow === 'editUser' && <UserEdit />}
            {currentModalWindow === 'addNewUser' && <AddNewUser />}
            {currentModalWindow === 'deleteUser' && <DeleteUser />}
        </div>
    );
};

export default ModalWindow;

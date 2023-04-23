import './App.css';
import { useEffect } from 'react';
import { fetchUsers } from './logic/logic';
import { useDispatch, useSelector } from 'react-redux';
import UserPage from './components/userPage/UserPage';
import UsersPage from './components/usersPage/UsersPage';
import WelcomePage from './components/welcomePage/WelcomePage';
import ModalWindow from './components/modalWindow/ModalWindow';

const App = () => {
    const dispatch = useDispatch();
    const {currentModalWindow, currentPage} = useSelector(state => state.userManagement);

    useEffect(() => {
        fetchUsers(dispatch);
    }, []);

    return (
      <div className='app'>
        {currentPage === 'welcomePage' && <WelcomePage />}
        {currentPage === 'userPage' && <UserPage />}
        {currentPage === 'usersPage' && <UsersPage />}
        {currentModalWindow && <ModalWindow />}
      </div>
    );
};

export default App;

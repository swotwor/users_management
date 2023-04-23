import './WelcomePage.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/usersReducer';

const WelcomePage = () => {
    const dispatch = useDispatch();
    
    return (
        <div className='welcomePage'>
            <div className="welcomePage_container">
                <div className="welcomePage_title">
                    Вітаю!
                </div>
                <div className="welcomePage_description">
                    Цей застосунок створений для керування користувачами.<br/>
                    Тут ви зможете редагувати дані вже існуючого користувача, додавати нового та видаляти старого.
                </div>
                    <button className="welcomePage_nextButton" onClick={() => (dispatch(setCurrentPage('usersPage')))}>
                        Почати
                    </button>
            </div>
        </div>
    );
};

export default WelcomePage;
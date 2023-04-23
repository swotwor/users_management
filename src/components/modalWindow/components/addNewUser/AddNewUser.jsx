import './AddNewUserStyles.scss';
import { useState } from 'react';
import { openModalWindow } from '../../../../store/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
import { checkAllValues, fetchNewUser } from '../../../../logic/logic';

const initialState = {
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
    },
    phone: '',
    website: '',
    company: {
        name: '',
        catchPhrase: '',
        bs: '',
    },
};

const AddNewUser = () => {
    const dispatch = useDispatch();
    const stateUsers = useSelector((state) => state.userManagement.users);
    const [userState, setUserState] = useState(initialState);

    const handleClickOnCancel = () => {
        dispatch(openModalWindow(''));
    };
    const handleClickOnAddUser = () => {
        if (checkAllValues(userState)) {
            fetchNewUser(dispatch, { ...userState, id: stateUsers.length + 1 });
            dispatch(openModalWindow(''));
        }
    };

    return (
        <div className='addNewUser' onClick={e => e.stopPropagation()}>
            <p className="addNewUser_title">Add New User</p>
            <div className="addNewUser_inputItems">
                <input
                    type="text"
                    placeholder="Name"
                    value={userState.name}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            name: event.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={userState.username}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            username: event.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={userState.email}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            email: event.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Street"
                    value={userState.address.street}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            address: {
                                ...userState.address,
                                street: event.target.value,
                            },
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Suite"
                    value={userState.address.suite}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            address: {
                                ...userState.address,
                                suite: event.target.value,
                            },
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="City"
                    value={userState.address.city}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            address: {
                                ...userState.address,
                                city: event.target.value,
                            },
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Zip code"
                    value={userState.address.zipcode}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            address: {
                                ...userState.address,
                                zipcode: event.target.value,
                            },
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={userState.phone}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            phone: event.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Website"
                    value={userState.website}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            website: event.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Company name"
                    value={userState.company.name}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            company: {
                                ...userState.company,
                                name: event.target.value,
                            },
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Company catchPhrase"
                    value={userState.company.catchPhrase}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            company: {
                                ...userState.company,
                                catchPhrase: event.target.value,
                            },
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Company bs"
                    value={userState.company.bs}
                    onChange={(event) =>
                        setUserState({
                            ...userState,
                            company: {
                                ...userState.company,
                                bs: event.target.value,
                            },
                        })
                    }
                />
            </div>
            <div className="addNewUser_buttonContainer">
                <button
                    className="addNewUser_buttonCancel"
                    onClick={handleClickOnCancel}
                >
                    Cancel
                </button>
                <button
                    className="addNewUser_buttonAdd"
                    onClick={handleClickOnAddUser}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddNewUser;

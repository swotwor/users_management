import './UserEditStyles.scss';
import { useState } from 'react';
import { openModalWindow } from '../../../../store/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
import { checkAllValues, setEditUser } from '../../../../logic/logic';

const UserEdit = () => {
    const dispatch = useDispatch();
    const selectedUser = useSelector(state => state.userManagement.selectedUser);
    const [userState, setUserState] = useState(selectedUser);

    const handleClickOnSave = () => {
        if (checkAllValues(userState)) {
            setEditUser(dispatch, userState)
        }
    };
    const handleClickOnCancel = () => {
        dispatch(openModalWindow(''));
    };

    return (
        <div className="userEdit" onClick={(e) => e.stopPropagation()}>
            <div className="userEdit_items">
                <div className="userEdit_item">
                    <p>Name</p>
                    <input
                        type="text"
                        value={userState.name}
                        onChange={(event) =>
                            setUserState({
                                ...userState,
                                name: event.target.value,
                            })
                        }
                        className={userState.name === selectedUser.name ? '' : 'userEdit_changedValue'}
                        placeholder="Name"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Username</p>
                    <input
                        type="text"
                        value={userState.username}
                        onChange={(event) =>
                            setUserState({
                                ...userState,
                                username: event.target.value,
                            })
                        }
                        className={userState.username === selectedUser.username ? '' : 'userEdit_changedValue'}
                        placeholder="Username"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Email</p>
                    <input
                        type="text"
                        value={userState.email}
                        onChange={(event) =>
                            setUserState({
                                ...userState,
                                email: event.target.value,
                            })
                        }
                        className={userState.email === selectedUser.email ? '' : 'userEdit_changedValue'}
                        placeholder="Email"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Street</p>
                    <input
                        type="text"
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
                        className={userState.address.street === selectedUser.address.street ? '' : 'userEdit_changedValue'}
                        placeholder="Street"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Suite</p>
                    <input
                        type="text"
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
                        className={userState.address.suite === selectedUser.address.suite ? '' : 'userEdit_changedValue'}
                        placeholder="Suite"
                    />
                </div>
                <div className="userEdit_item">
                    <p>City</p>
                    <input
                        type="text"
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
                        className={userState.address.city === selectedUser.address.city ? '' : 'userEdit_changedValue'}
                        placeholder="City"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Zip-code</p>
                    <input
                        type="text"
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
                        className={userState.address.zipcode === selectedUser.address.zipcode ? '' : 'userEdit_changedValue'}
                        placeholder="Zip code"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Phone</p>
                    <input
                        type="text"
                        value={userState.phone}
                        onChange={(event) =>
                            setUserState({
                                ...userState,
                                phone: event.target.value,
                            })
                        }
                        className={userState.phone === selectedUser.phone ? '' : 'userEdit_changedValue'}
                        placeholder="Phone"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Website</p>
                    <input
                        type="text"
                        value={userState.website}
                        onChange={(event) =>
                            setUserState({
                                ...userState,
                                website: event.target.value,
                            })
                        }
                        className={userState.website === selectedUser.website ? '' : 'userEdit_changedValue'}
                        placeholder="Website"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Company name</p>
                    <input
                        type="text"
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
                        className={userState.company.name === selectedUser.company.name ? '' : 'userEdit_changedValue'}
                        placeholder="Company name"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Company catchPhrase</p>
                    <input
                        type="text"
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
                        className={userState.company.catchPhrase === selectedUser.company.catchPhrase ? '' : 'userEdit_changedValue'}
                        placeholder="Company catchPhrase"
                    />
                </div>
                <div className="userEdit_item">
                    <p>Company bs</p>
                    <input
                        type="text"
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
                        className={userState.company.bs === selectedUser.company.bs ? '' : 'userEdit_changedValue'}
                        placeholder="Company bs"
                    />
                </div>
            </div>
            <div className="userEdit_buttons">
                <button className="userEdit_buttonCancel" onClick={handleClickOnCancel} >
                    Cancel
                </button>
                <button className="userEdit_buttonSave" onClick={handleClickOnSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default UserEdit;

import React, { createContext, useState, useRef } from 'react';
import {login_token, login_url, forgot_password_url} from '../../../config/login';

// ajax
import {ajax} from '../../ajax';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    let $ajax = new ajax();
    const [user, setUser] = useState({});
    const formUser = useRef({
        username: "",
        password: "",
        logintoken: login_token
    });
    const forgot_psswd_url = useRef(forgot_password_url);

    const setFormUser = (field, value) => {
        formUser.current[field] = value;
    };

    const getForgotPsswdUrl = () => {
        return forgot_psswd_url.current;
    };

    const login = () => {
        const callback_success = (response_data) => console.log(response_data);
        const callback_error = () => console.log("Ocurrió un error al realizar la petición");
        $ajax.post(login_url, callback_success, callback_error, formUser.current);
    };

    return (
        <LoginContext.Provider
            value={{
                user,
                setUser,
                setFormUser,
                getForgotPsswdUrl,
                login
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};


export { LoginContext, LoginProvider }
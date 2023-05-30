import React, { useContext } from 'react';

// context
import {LoginContext} from '../../../middleware/context/login';

const Login = () => {
    const {login, setFormUser, getForgotPsswdUrl} = useContext(LoginContext);

    const setForm = e => {
        setFormUser(e.target.name, e.target.value);
    };

    const submit = e => {
        e.preventDefault();
        login();
    };
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={submit}>
                    <input type="text" name="username" placeholder="Username" onChange={setForm} />
                    <input type="password" name="password" placeholder="Password" onChange={setForm} />
                    <div className="button-box">
                        <div className="login-toggle-btn">
                            <input type="checkbox" />
                            <label>Remember me</label>
                            <a href={getForgotPsswdUrl()}>Forgot Password?</a>
                        </div>
                        <button className="default-btn" type="submit"><span>Login</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;
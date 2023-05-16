import React from 'react';

const Login = () => {
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form action="#" method="post">
                    <input type="text" name="user-name" placeholder="Username" />
                    <input type="password" name="user-password" placeholder="Password" />
                    <div className="button-box">
                        <div className="login-toggle-btn">
                            <input type="checkbox" />
                            <label>Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button className="default-btn" type="submit"><span>Login</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;
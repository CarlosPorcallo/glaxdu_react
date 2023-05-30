import {React, useState} from 'react';
import {show_register_btn} from '../../../config/login';

// components
import Login from '../../../components/forms/login';
import Register from '../../../components/forms/register';

const LoginRegisterArea = () => {
    const [show_register, setShowRegister] = useState(false);
    return (
        <div className="login-register-area pt-130 pb-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 ms-auto me-auto">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab-list nav">
                                <a className={!show_register ? "active" : ""} data-bs-toggle="tab" onClick={() => { setShowRegister(!show_register); }}>
                                    <h4> login </h4>
                                </a>
                                { show_register_btn ? (
                                    <a className={show_register ? "active" : ""} data-bs-toggle="tab" onClick={() => { setShowRegister(!show_register); }}>
                                        <h4> register </h4>
                                    </a>
                                ) : null }
                            </div>
                            <div className="tab-content">
                                <div id="lg1" className={!show_register ? "tab-pane active": "tab-pane"}>
                                    <Login />
                                </div>
                                <div id="lg2" className={show_register && show_register_btn ? "tab-pane active": "tab-pane"}>
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LoginRegisterArea;
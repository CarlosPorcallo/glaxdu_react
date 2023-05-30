import {React, useState} from 'react';
import {show_register_btn} from '../../../config/login';

// components
import Login from '../../../components/forms/login';
import Register from '../../../components/forms/register';

const FloatingForm = () => {
    const [show_register, setShowRegister] = useState(false);
    return (
        <div className="floating-form">
            <div className="login-register-wrapper">
                <div className="tab-content">
                    <div id="lg1" className="tab-pane active">
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FloatingForm;
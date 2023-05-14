import {React, Fragment} from 'react';

import Header from '../../layouts/header';
import LoginRegisterGrid from '../../layouts/loginregister/loginregistergrid';
import LoginRegisterArea from '../../layouts/loginregister/loginregisterarea';
import Footer from '../../layouts/footer';

const LoginRegister = () => {
    return (
        <Fragment>
            <Header />
            <LoginRegisterGrid />
            <LoginRegisterArea />
            <Footer />
        </Fragment>
    );
}
 
export default LoginRegister;
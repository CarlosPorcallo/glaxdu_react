import {React, Fragment} from 'react';

import Header from '../../layouts/header';
import LoginGrid from '../../layouts/login/logingrid';
import LoginArea from '../../layouts/login/loginarea';
import Footer from '../../layouts/footer';

const Login = () => {
    return (
        <Fragment>
            <Header />
            <LoginGrid />
            <LoginArea />
            <Footer />
        </Fragment>
    );
}
 
export default Login;
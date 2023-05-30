import {React, Fragment, } from 'react';
import './assets/css/App.css';

// router del sitio
import Rout3r from './routes';

// context
import {HeaderFooterProvider} from './middleware/context/headerfooter';
import {CourseProvider} from './middleware/context/course';
import {LoginProvider} from './middleware/context/login';

function App() {
  return (
    <Fragment>
      <LoginProvider>
        <HeaderFooterProvider>
          <CourseProvider>
            <Rout3r /> 
          </CourseProvider>
        </HeaderFooterProvider>
      </LoginProvider>
    </Fragment>
  );
}

export default App;

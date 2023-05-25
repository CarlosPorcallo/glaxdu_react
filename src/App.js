import {React, Fragment, } from 'react';
import './assets/css/App.css';

// router del sitio
import Rout3r from './routes';

// context
import {HeaderFooterProvider} from './middleware/context/headerfooter';
import {CourseProvider} from './middleware/context/course';

function App() {
  return (
    <Fragment>
      <HeaderFooterProvider>
        <CourseProvider>
          <Rout3r /> 
        </CourseProvider>
      </HeaderFooterProvider>
    </Fragment>
  );
}

export default App;

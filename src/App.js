import {React, Fragment, } from 'react';
import './assets/css/App.css';

// router del sitio
import Rout3r from './routes';

// context
import {HeaderFooterProvider} from './middleware/context/headerfooter';

function App() {
  return (
    <Fragment>
      <HeaderFooterProvider>
        <Rout3r /> 
      </HeaderFooterProvider>
    </Fragment>
  );
}

export default App;

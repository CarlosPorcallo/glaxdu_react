import {React, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import './assets/css/App.css';

// router del sitio
import Rout3r from './routes';

function App() {
  return (
    <Fragment>  
      <Rout3r />
      <Helmet>
        <script src="assets/js/popper.min.js" type="text/javascript" />
        <script src="assets/js/bootstrap.min.js" type="text/javascript" />
        <script src="assets/js/plugins.js" type="text/javascript" />
      </Helmet>
    </Fragment>
  );
}

export default App;

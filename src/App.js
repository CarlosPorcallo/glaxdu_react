import {React, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import './assets/css/App.css';

// router del sitio
import Rout3r from './routes';

function App() {
  return (
    <Fragment>  
      <Helmet>
        <script src="assets/js/popper.min.js" type="text/javascript" />
        <script src="assets/js/bootstrap.min.js" type="text/javascript" />
        <script src="assets/js/plugins.js" type="text/javascript" />
      </Helmet>
      <Rout3r />
    </Fragment>
  );
}

export default App;

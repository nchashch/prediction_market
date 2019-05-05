import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

ReactDOM.render(<App />, document.getElementById('app'));

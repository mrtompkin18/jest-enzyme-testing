import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import '../node_modules/antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

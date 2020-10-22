import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Nos traemos el STORE de la aplicación
import store from './store/config/storeConfig';

// Nos traemos el PROVIDER de React Redux -> Muy parecido a cómo funcionaba el Hook useContext()
import { Provider } from 'react-redux'; // nos va a permitir pasar los datos del Store a la aplicación

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './pages/HomePage/App';
import LoadingPage from './pages/Loading/LoadingPage';
import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));
renderApp();

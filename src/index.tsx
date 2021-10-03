import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'assets/style/index.scss';
// import 'assets/css/index.scss';
import App from './app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

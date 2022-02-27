import { createElement } from 'react';
import { render } from 'react-dom';
import { App } from './app/app';
import { Provider } from 'react-redux';
import { store } from './app/store';

import './index.css';

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));

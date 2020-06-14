import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import rootReducer from './reducers';
import { addCharacterById } from './actions';

const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

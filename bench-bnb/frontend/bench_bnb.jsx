import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './store/store';
import App from './components/App';

const Root = ({ store }) => (
   <Provider store={store}>
      <HashRouter>
         <App />
      </HashRouter>
   </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
   let store;
   if (window.currentUser) {
      const preloadedState = {
         entities: {
            users: {
               [window.currentUser.id]: window.currentUser
            }
         },
         session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
   } else {
      store = configureStore();
   }
   const root = document.getElementById('root');
   ReactDOM.render(<Root store={store} />, root);
});

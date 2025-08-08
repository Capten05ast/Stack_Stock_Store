

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'


// PROVIDER :-
// By this we attached store to the whole application
createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    {/* passing data present inside store to all the child components */}

    <BrowserRouter> 
      <App /> 
      <ToastContainer position='top-center' />
    </BrowserRouter>
    
  </Provider>
)




// REDUX TOOLKIT :-
// In this project we are going to use Redux toolkit instead of 
// context API


// REDUX DEVTOOLS EXTENSION :-
// Here we have installed React Devtools Extensions for chrome.
// We can open that extension in console window
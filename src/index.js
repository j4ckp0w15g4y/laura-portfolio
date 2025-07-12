import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';

// import App from './App'

// // This is the ID of the div in your index.html file

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// //Then, finally:

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );



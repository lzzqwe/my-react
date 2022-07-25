import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ElementRender from './views/ElementRender';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const tick = () => {
//   root.render(
//     <React.StrictMode>
//       <ElementRender />
//     </React.StrictMode>
//   );
// }
// setInterval(tick,1000)



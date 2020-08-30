import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

<<<<<<< HEAD

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);

=======
const rootEl = document.getElementById('root')
// ReactDOM.render(<App />, rootEl)
const root = ReactDOM.unstable_createRoot(rootEl)
root.render(<App />)
>>>>>>> 99182bdc55f0c71247860f3142ce87cd373a079c


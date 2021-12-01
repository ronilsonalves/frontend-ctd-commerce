import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.scss';
import App from '../src/App';
import '../src/components/Home/Home.scss';
import { StateProvider } from "../src/StateProvider";
import reducer, { initialState } from "./reducer";


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

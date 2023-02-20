/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { LoadScript } from '@react-google-maps/api';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoadScript
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    libraries={['places']}
  >
    <App />
  </LoadScript>
);

reportWebVitals();

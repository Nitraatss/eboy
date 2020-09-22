// Styles
import 'sanitize.css';
import 'aos/dist/aos.css';
import './sass/style.scss';

// Polyfill
import objectFitImages from 'object-fit-images';

// Animation
import AOS from 'aos';

// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Container
import App from './js/container';

objectFitImages();

AOS.init();

ReactDOM.render(
  <App />,

  document.querySelector('#app'),
);

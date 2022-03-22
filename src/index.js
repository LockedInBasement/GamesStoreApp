import React from 'react';
import reactDom from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');

if(rootElement){
  ReactDom.render(<App/>, rootElement);
}
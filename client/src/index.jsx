import React from 'react';
import ReactDOM from 'react-dom';
import SearchModule from './components/SearchModule';
import PhotoModule from './components/PhotoModule';

ReactDOM.render(<SearchModule />, document.querySelector('#search-module'));
ReactDOM.render(<PhotoModule />, document.querySelector('#photo-module'));

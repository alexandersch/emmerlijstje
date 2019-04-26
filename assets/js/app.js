import React from 'react';
import ReactDom from 'react-dom';
import RootContainer from './containers/RootContainer';

ReactDom.render(<RootContainer { ...app } csrf={ csrf }/>, document.getElementById('react'));
import React from 'react';
import ReactDOM from 'react-dom';
import Files from './Files';

describe("<Files />", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Files />, div);
  });
});

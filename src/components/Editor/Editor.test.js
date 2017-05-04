import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import Editor from './Editor';

describe("<Editor />", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Editor />, div);
  });

  it('renders a textarea', () => {
    const editor = shallow(
      <Editor />
    );
    expect(editor.containsMatchingElement(<textarea />)).toEqual(true);
  });
});

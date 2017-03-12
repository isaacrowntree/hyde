import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import Editor from './Editor';


describe("<Editor />", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Editor />, div);
  });

  it('renders a <textarea></textarea>', () => {
    const editor = shallow(
      <Editor />
    );
    expect(editor.containsMatchingElement(<textarea />)).toEqual(true);
  });
});